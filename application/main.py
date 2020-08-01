from flask import Blueprint, Flask, request, jsonify, json
from bson.json_util import dumps, RELAXED_JSON_OPTIONS
from flask_jwt_extended import create_access_token
from bson.objectid import ObjectId
import re

from .extensions import mongo
from .extensions import bcrypt
from .extensions import jwt

main = Blueprint('main', __name__)


# Login endpoint
@main.route('/signin', methods=['POST'])
def login():
    email = request.get_json()['email']
    password = request.get_json()['password']

    user_collection = mongo.db.users
    query = user_collection.find_one({'email': email})

    if query is None:
        return jsonify({"email": "Email not registered"})
    elif query:
        if bcrypt.check_password_hash(query['password'], password):
            accessToken = create_access_token(identity={
                'firstname': query['firstname'],
                'lastname': query['lastname'],
                'gender': query['gender'],
                'email': query['email'],
            })
            return jsonify({'token': accessToken})
        else:
            return jsonify({'password': 'Wrong password! Check again.'})


# Registration endpoint
@main.route('/registration', methods=['POST'])
def registration():
    firstname = request.get_json()['firstname']
    lastname = request.get_json()['lastname']
    gender = request.get_json()['gender']
    email = request.get_json()['email']
    passwordcheck = request.get_json()['password']
    passwordcheckconfirm = request.get_json()['cpassword']

    if firstname == "" or lastname == "":
        return jsonify({"name": "Cannot be empty"})

    regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'

    if email == "":
        return jsonify({"email": "Enter email"})

    if(re.search(regex, email)):
        pass
    else:
        return jsonify({"email": "Enter a valid email using @ sign"})

    user_collection = mongo.db.users
    query = user_collection.find_one({'email': email})

    if passwordcheck != passwordcheckconfirm:
        return jsonify({"password": "Password doesn't match!"})

    elif query is not None:
        return jsonify({"email": "User already exist!"})

    elif (any(x.isupper() for x in passwordcheck) and any(x.islower() for x in passwordcheck) and any(x.isdigit() for x in passwordcheck) and len(passwordcheck) > 5):
        user_collection = mongo.db.users
        password = bcrypt.generate_password_hash(
            request.get_json()['password']).decode('utf-8')
        user_collection.insert({'firstname': firstname, 'lastname': lastname,
                                'gender': gender, 'email': email, 'password': password})
        return jsonify({"success": "Registration complete!"})
    else:
        return jsonify({"password": "Make sure that password contain atleast 1 uppercase, 1 lowercase, 1 number and 8 characters"})


@main.route('/setUserDetails', methods=['POST'])
def setUserDetails():
    firstname = request.get_json()['firstname']
    lastname = request.get_json()['lastname']
    email = request.get_json()['email']
    street = request.get_json()['street']
    city = request.get_json()['city']
    province = request.get_json()['province']
    zipcode = request.get_json()['zipcode']
    passwordcheck = request.get_json()['password']
    passwordcheckconfirm = request.get_json()['cpassword']

    if firstname == "":
        return jsonify({"firstname": "Firstname cannot be empty"})

    if lastname == "":
        return jsonify({"lastname": "Lastname cannot be empty"})

    if passwordcheck != passwordcheckconfirm:
        return jsonify({"password": "Password doesn't match!"})

    elif (passwordcheck == "" and passwordcheckconfirm == ""):
        users_collection = mongo.db.users

        newvalues = {'$set': {'firstname': firstname, 'lastname': lastname, 'address': {
            'street': street, 'city': city, 'province': province, 'zipcode': zipcode}}}

        users_collection.find_one_and_update({"email": email}, newvalues)

        return jsonify({"success": "Update complete"})

    elif (any(x.isupper() for x in passwordcheck) and any(x.islower() for x in passwordcheck) and any(x.isdigit() for x in passwordcheck) and len(passwordcheck) > 5):
        users_collection = mongo.db.users
        password = bcrypt.generate_password_hash(
            request.get_json()['password']).decode('utf-8')
        newvalues = {'$set': {'firstname': firstname, 'lastname': lastname, 'password': password, 'address': {
            'street': street, 'city': city, 'province': province, 'zipcode': zipcode}}}

        users_collection.find_one_and_update({"email": email}, newvalues)

        return jsonify({"success": "Profile details updated!"})
    else:
        return jsonify({"password": "Make sure that password contain atleast 1 uppercase, 1 lowercase, 1 number and 8 characters"})


@main.route('/getUserAddress', methods=['POST'])
def getUserAddress():
    email = request.get_json()['email']
    users_collection = mongo.db.users
    query = users_collection.find_one(
        {"email": email}, {"address": 1, "_id": 0})
    if query == {}:
        return jsonify({'error': 'No address found'})
    else:
        return dumps(query)


@main.route('/getCourses', methods=['GET'])
def browseCourses():
    course_collection = mongo.db.courses
    query = course_collection.find()
    return dumps(query)


@main.route('/getEnrolled', methods=['POST'])
def getEnrolled():
    email = request.get_json()['email']
    id = request.get_json()['id']
    users_collection = mongo.db.users
    myquery = {"email": email}
    newvalues = {"$push": {"course": id}}
    users_collection.update_many(myquery, newvalues)
    return jsonify({"success": "Enroll complete"})


@main.route('/getUnenrolled', methods=['POST'])
def getUnenrolled():
    email = request.get_json()['email']
    id = request.get_json()['id']
    users_collection = mongo.db.users
    myquery = {"email": email}
    newvalues = {"$pull": {"course": id}}
    users_collection.update_many(myquery, newvalues)
    return jsonify({"success": "Enroll complete"})


@main.route('/alreadyEnrolled', methods=['POST'])
def alreadyEnrolled():
    email = request.get_json()['email']
    id = request.get_json()['id']
    users_collection = mongo.db.users
    query = users_collection.find_one(
        {'email': email, 'course': {"$in": [id]}})
    if query is not None:
        return jsonify({"success": "found an entry"})
    else:
        return jsonify({"fail": "entry not found"})

# need to fix the course returning nothing
@main.route('/getYourCourses', methods=['POST'])
def getYourCourses():
    email = request.get_json()['email']
    users_collection = mongo.db.users
    query = users_collection.find({'email': email}, {"course": 1, "_id": 0})
    courses = []
    course_collection = mongo.db.courses
    for i in range(len(query[0]['course'])):
        search = query[0]['course'][i]
        course = course_collection.find({'_id': ObjectId(search)})
        courses += course
    return dumps(courses)


@main.route('/getQuiz', methods=['POST'])
def getQuiz():
    # TODO: quiz_1 should be changed to something dynamic because there will be more quizzes
    id = request.get_json()['id']
    course_collection = mongo.db.courses
    query = course_collection.find_one(
        {'_id': ObjectId(id)}, {"quizzes": 1, "_id": 0})
    return dumps(query)


@main.route('/setResult', methods=['POST'])
def setResult():
    email = request.get_json()['email']
    id = request.get_json()['id']
    title = request.get_json()['title']
    score = request.get_json()['result']
    users_collection = mongo.db.users
    newvalues = {'$addToSet': {'results': {
        "id": id, "score": score, "title": title}}}
    users_collection.find_one_and_update({"email": email}, newvalues)
    return jsonify({"success": "Update complete"})


@main.route('/getCourseResults', methods=['POST'])
def getCourseResults():
    email = request.get_json()['email']
    users_collection = mongo.db.users
    query = users_collection.find_one(
        {'email': email}, {'results': 1, "_id": 0})
    if query is None:
        return jsonify({"error": "no courses"})
    return dumps(query)
