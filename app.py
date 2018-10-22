#Main Application
from flask import Flask, request, render_template

#Instantiate a Flask app and assign it to a variable app, this could be any name, but Heroku (Our potential hosting company requires that the variable be app)
app = Flask(__name__)

#This is the route that points to the app's index page
@app.route('/')
def index():
    return render_template('index.html')

#Finally we run the app, __name__ == __main__ means if we are accessing this file directly
#It is currently on debug mode, to help up catch any error that may come up while the app runs
#The debug mode will be removed when we are on production so that our users don't to see our errors
if __name__ == '__main__':
    app.run(debug=True)