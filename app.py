#Main Application
from flask import Flask, request, render_template

#Instantiate a Flask app and assign it to a variable app, this could be any name, but Heroku (Our potential hosting company requires that the variable be app)
app = Flask(__name__)


# prevent cached responses
@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r


#This is the route that points to the app's index page
@app.route('/')
def index():
    return render_template('index.html')

#This is a test route to show how the footer and header can be included in a new page
#Ajax can also be used to call this route, in that case, this route will return only the page fragment
#required to be replaced with on the main template. Thus, instead of including the header and footer
#in about-us the template we could just return the main about-us content to be replaced with.
@app.route('/about-us')
def about_us():
    '''
    This route sends request to the database for the content of the About table.
    Data returned to the db gets passed to the about-us.html template.
    '''
    return render_template('about-us.html')


@app.route('/faqs')
def faqs():
    '''
    This route sends request to the database for the content of the About table.
    Data returned to the db gets passed to the about-us.html template.
    '''
    return render_template('faqs.html')
#Finally we run the app, __name__ == __main__ means if we are accessing this file directly
#It is currently on debug mode, to help us catch any error that may come up while the app runs
#The debug mode will be removed when we are on production so that our users don't get to see our errors
if __name__ == '__main__':
    app.run(debug=True)
    # app.run(debug=True,host="192.168.0.102")