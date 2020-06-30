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

    user = mongo.db.users
    q = user.find_one({'email': email, 'password': password})

    # return req['firstname']
    if q is None:
        return jsonify({"login": "Incorrect credentials! Please check your email or password."})

    else:
        req = eval(dumps(q, json_options=RELAXED_JSON_OPTIONS))
        return jsonify({"login": "Login Successfully!", "firstname": req['firstname'], "lastname": req['lastname']})
