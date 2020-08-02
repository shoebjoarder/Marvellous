# Server side

Create a virtual environment

In Windows, after installation of Python, type the following commands in the Command prompt or Powershell as Administrator

    pip install virtualenv
    pip install virtualenvwrapper-win

Go to your desired directory and type the following commands

    mkdir venv
    virtualenv venv

The virtual environment can be activated in the Visual Studio Code.

Open the terminal in the Visual Studio code and install the following dependencies

    pip install -r requirements.txt

Create a **.env** file here and write the following, when testing locally.

    MONGO_URI='mongodb://localhost:27017/nxgen'

Open your Mongo Compass and create a database named "nxgen" and a collection "courses". Then import the data from **data/course.json**.

Run the server

    flask run

# Server side folder structure

The Server side of the project has the following folder structure:
+ application (folder)
    + `__init__`.py (file)
    + extensions.py (file)
    + main.py (file)
    + settings.py (file)
+ data (folder)
    + courses.json (file)
    + users.json (file)
+ .flaskenv (file)
+ README.md
+ requirements.txt (file)
+ .gitignore