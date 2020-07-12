# Server side

Install the following dependencies

    pip install -r requirements.txt

Create a **.env** file here and write the following

    MONGO_URI='mongodb://localhost:27017/nxgen'
    JWT_SECRET_KEY = 'secret'

Open your Mongo Compass and create a database named "nxgen" and a collection "courses". Then import the data **data/course.json**.

Run the server

    flask run