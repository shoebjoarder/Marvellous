from flask import Blueprint, Flask, request, jsonify, json
from bson.json_util import dumps, RELAXED_JSON_OPTIONS

from .extensions import mongo

main = Blueprint('main', __name__)


@main.route('/')
def index():
    user_collection = mongo.db.users
    user_collection.insert({'firstname': 'Shoeb', 'lastname': 'Joarder',
                            'email': 'shoeb@gmail.com', 'password': 'qwer1234'})
    return '<h1>Added a user!</h1>'


@main.route('/login', methods=['POST'])
def login():

    email = request.get_json()['email']
    password = request.get_json()['password']

    user_collection = mongo.db.users
    query = user_collection.find_one({'email': email, 'password': password})

    if query is None:
        return jsonify({"login": "Incorrect credentials! Please check your email or password."})

    else:
        req = eval(dumps(query, json_options=RELAXED_JSON_OPTIONS))
        return jsonify({"login": "success", "firstname": req['firstname'], "lastname": req["lastname"], "email": req["email"]})


@main.route('/registration', methods=['POST'])
def registration():
    firstname = request.get_json()['firstname']
    lastname = request.get_json()['lastname']
    gender = request.get_json()['gender']
    email = request.get_json()['email']
    password = request.get_json()['password']
    cpassword = request.get_json()['cpassword']

    if password != cpassword:
        return jsonify({"register": "Password doesn't match!"})

    elif (any(x.isupper() for x in password) and any(x.islower() for x in password) and any(x.isdigit() for x in password) and len(password) > 5):
        user_collection = mongo.db.users
        query = user_collection.insert(
            {'firstname': firstname, 'lastname': lastname, 'gender': gender, 'email': email, 'password': password})

        req = eval(dumps(query, json_options=RELAXED_JSON_OPTIONS))
        return jsonify({"register": "registration complete"})
    else:
         return jsonify({"register": "Make sure that password contain atleast 1 uppercase, 1 lowercase, 1 number and 6 characters"})

# , "firstname": req["firstname"], "lastname": req['lastname'], "gender": req[gender], "email": req['email']