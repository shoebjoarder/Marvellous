from flask import Blueprint, Flask, request, jsonify, json
from bson.json_util import dumps, RELAXED_JSON_OPTIONS
from bson.objectid import ObjectId 
from datetime import datetime 
from flask_jwt_extended import create_access_token

from .extensions import mongo
from .extensions import bcrypt
from .extensions import jwt

main = Blueprint('main', __name__)


@main.route('/')
def index():
    user_collection = mongo.db.users
    user_collection.insert({'firstname': 'Shoeb', 'lastname': 'Joarder',
                            'email': 'shoeb@gmail.com', 'password': 'qwer1234'})
    return '<h1>Added a user!</h1>'


@main.route('/loginEmail', methods=['POST'])
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
                'email': query['email'],
            })
            return jsonify({'token': accessToken})
        else:
            return jsonify({'error': 'Password does not match!'})


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
        password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
        user_collection.insert({'firstname': firstname, 'lastname': lastname, 'gender': gender, 'email': email, 'password': password})
        return jsonify({"success": "registration complete"})
    else:
         return jsonify({"error": "Make sure that password contain atleast 1 uppercase, 1 lowercase, 1 number and 6 characters"})