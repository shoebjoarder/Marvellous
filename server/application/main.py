from flask import Blueprint, Flask, request, jsonify, json
from bson.json_util import dumps, RELAXED_JSON_OPTIONS
from bson.objectid import ObjectId
from datetime import datetime
from flask_jwt_extended import create_access_token

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
        return jsonify({"error": "Email not registered"})
    elif query:
        if bcrypt.check_password_hash(query['password'], password):
            accessToken = create_access_token(identity={
                'firstname': query['firstname'],
                'lastname': query['lastname'],
                'gender': query['gender'],
                'email': query['email'],
                # 'courses': query['courses']
            })
            return jsonify({'token': accessToken})
        else:
            return jsonify({'error': 'Password does not match!'})


# Registration endpoint
@main.route('/registration', methods=['POST'])
def registration():
    firstname = request.get_json()['firstname']
    lastname = request.get_json()['lastname']
    gender = request.get_json()['gender']
    email = request.get_json()['email']
    passwordcheck = request.get_json()['password']
    passwordcheckconfirm = request.get_json()['cpassword']

    user_collection = mongo.db.users
    query = user_collection.find_one({'email': email})

    if passwordcheck != passwordcheckconfirm:
        return jsonify({"error": "Password doesn't match!"})

    elif query is not None:
        return jsonify({'error': 'User already exist!'})

    elif (any(x.isupper() for x in passwordcheck) and any(x.islower() for x in passwordcheck) and any(x.isdigit() for x in passwordcheck) and len(passwordcheck) > 5):
        user_collection = mongo.db.users
        password = bcrypt.generate_password_hash(
            request.get_json()['password']).decode('utf-8')
        user_collection.insert({'firstname': firstname, 'lastname': lastname,
                                'gender': gender, 'email': email, 'password': password})
        return jsonify({"success": "registration complete"})
    else:
        return jsonify({"error": "Make sure that password contain atleast 1 uppercase, 1 lowercase, 1 number and 6 characters"})


@main.route('/browse', methods=['GET'])
def browseCourses():
    course_collection = mongo.db.courses
    query = course_collection.find()
    return dumps(query)

@main.route('/findCourse', methods=['POST'])
def findCourse():    
    title = request.get_json()['title']
    course_collection = mongo.db.courses
    query = course_collection.find_one({"title": title})
    return dumps(query)


# TODO: continue after creating getEnrolled endpoing
# @main.route('/alreadyEnrolled', methods=['POST'])
# def alreadyEnrolled():
#     email = request.get_json()['email']
#     oid = request.get_json()['oid']
#     users_collection = mongo.db.users
#     query = users_collection.find_one({'email': email, 'course': })