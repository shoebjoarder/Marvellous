from flask import Flask
from .extensions import mongo
from .extensions import jwt
from .main import main

def create_app(config_object="application.settings"):
    app = Flask(__name__)

    app.config.from_object(config_object)

    mongo.init_app(app)

    app.register_blueprint(main)

    jwt.init_app(app)

    return app