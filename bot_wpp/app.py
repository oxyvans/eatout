#!/usr/bin/python3
""" Starts a Flash Web Application """
from flask import Flask, request
from requests import delete
from send_message import send_message
from confirm_message import confirm_message
from decline_message import decline_message
from awaiting_message import awaiting_message
from external import update_status
app = Flask(__name__)


@app.route('/hello', strict_slashes=False)
def hello():
    """ Prints a Message when / is called """
    return 'Hello!'

@app.route('/send-message', strict_slashes=False)
def send():
    """ Prints a Message when / is called """
    
    msg = request.args.get('msg')
    print(msg)
  #  msg = f"Día {nueva.time}, Hora: {nueva.date}, Cantidad de personas: {nueva.guests}. Responde 'Rechazar {idReserva}' para rechazarla."
    send_message(msg.replace('_', ' '))
    
    return "OK"

@app.route('/confirm-message', strict_slashes=False)
def conf(msg):
    """ sends confirmation message  """
    #msg = request.args.get('msg')
    #confirm_message(msg.replace('_', ' '))
    confirm_message()

    return "OK"

@app.route('/decline-message', strict_slashes=False)
def decl():
    """ sends decline message """
    decline_message()
    return "OK"

@app.route('/awaiting-message', strict_slashes=False)
def awaiting():
    awaiting_message()
    return "OK"


if __name__ == "__main__":
    """ Main Function """
    app.run(port=5001)
