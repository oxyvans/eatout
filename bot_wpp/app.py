#!/usr/bin/python3
""" Starts a Flash Web Application """
from flask import Flask
app = Flask(__name__)


@app.route('/hello', strict_slashes=False)
def hello():
    """ Prints a Message when / is called """
    return 'Hello!'

@app.route('/send-message', strict_slashes=False)
def send():
    """ Prints a Message when / is called """
    return 'Send!'

if __name__ == "__main__":
    """ Main Function """
    app.run(host='0.0.0.0', port=5000)