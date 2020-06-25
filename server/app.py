from flask import Flask, render_template, redirect, url_for, request, session
from flask_pymongo import PyMongo
from pymongo import MongoClient

app = Flask(__name__)

app.config['MONGO_URI'] = "mongodb://localhost:27017/nxgenUserDB"
app.config['MONGO_DBNAME'] = 'nxgenUserDB'
app.config['SECRET_KEY'] = 'secret_key'

mongo = PyMongo(app)
db = mongo.db
col = mongo.db['nxgenUsers']

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        password = None
        user = col.find_one({'email': request.form['email']})
        print(user)
        if user:
            password = request.form['password'] 
            if password == user['password']:
                session['logged_in'] = True
                session['user'] = {'firstname': user['firstname'], 
                                    'lastname': user['lastname'],
                                    'email': user['email'],
                                    'gender': user['gender'],
                                    'birthDate': user['birthDate']}
                return redirect(url_for('home'))
            else:
                error = 'Incorrect password! Please try again.'
        else:
            error = 'User does not exist!'
    return render_template('login.html', error=error)

@app.route('/signout')
def signout():
    session['logged_in'] = False
    session['user'].clear()
    return redirect(url_for('home'))


@app.route('/registration', methods=['GET', 'POST'])
def registration():
    passError = None
    if request.method == 'POST':
        password = request.form['password']
        cpassword = request.form['cpassword']
        # Password validation
        if password != cpassword:
            passError = "Password doesn't match"
        elif (any(x.isupper() for x in password) and any(x.islower() for x in password) and any(x.isdigit() for x in password) and len(password) > 5): 
            data = request.form['date']
            data = data.split('/')
            print('Month: ', data[0])
            col.insert({'firstname': request.form['firstname'],
                        'lastname': request.form['lastname'],
                        'gender': request.form['gender'],
                        'birthDate': {'day': data[1],
                                    'month': data[0],
                                    'year': data[2]},
                        'email': request.form['email'],
                        'password': request.form['password']})
            return redirect(url_for('login'))
        else:
            passError = "Password must contain atleast 1 uppercase, 1 lowercase, 1 number and 6 characters"
    return render_template('registration.html', passError=passError)

@app.route('/profile')
def profile():
    return render_template('profile.html')

if __name__ == '__main__':
    app.run(debug=True)