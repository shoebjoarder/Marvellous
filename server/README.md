# Server side

Install the following dependencies

    pip install -r requirements.txt

Create a **.env** file here and write the following

    MONGO_URI='mongodb://localhost:27017/nxgen'
    JWT_SECRET_KEY = 'secret'

Open your Mongo Compass and create a database named "nxgen" and a collection "courses". Then import the data from **data/course.json**.

Run the server

    flask run

# Server side folder structure

The Server side of the project has the following folder structure:

server:
+ application (folder)
    + __init__.py
    + extensions.py
    + main.py
    + settings.py
+ data (folder)
    + courses.json
    + users.json
+ .flaskenv
+ README.md
+ requirements.txt
+ .gitignore