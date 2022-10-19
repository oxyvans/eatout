#!/usr/bin/python3
""" Starts a Flash Web Application """
from flask import Flask, request
from requests import delete
from send_message import send_message
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
  #  msg = f"Día {nueva.time}, Hora: {nueva.date}, Cantidad de personas: {nueva.guests}. Responde 'Rechazar {idReserva}' para rechazarla."
    send_message(msg.replace('_', ' '))
    
    return "OK"

if __name__ == "__main__":
    """ Main Function """
    app.run(host='0.0.0.0', port=5000)