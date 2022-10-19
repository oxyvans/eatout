#!/usr/bin/python3
""" Starts a Flash Web Application """
from flask import Flask, request
from requests import delete
from send_message import send_message
from reservation import Reservation
from external import confirmation_reservation, delete_reservation
app = Flask(__name__)


@app.route('/hello', strict_slashes=False)
def hello():
    """ Prints a Message when / is called """
    return 'Hello!'

@app.route('/send-message', strict_slashes=False)
def send():
    """ Prints a Message when / is called """
    idUser = request.args.get('idUser')
    idRestaurant = request.args.get('idRestaurant')
    date = request.args.get('date')
    time = request.args.get('time')
    guests = request.args.get('guests')
  
    nueva = Reservation(idUser, idRestaurant, date, time, guests)
    
    res = confirmation_reservation(nueva)
    idReserva = eval(res)["msg"]
        
    msg = f"Día {nueva.time}, Hora: {nueva.date}, Cantidad de personas: {nueva.guests}. Responde 'Rechazar {idReserva}' para rechazarla."
    send_message(msg)
    
    print("delete")
    res = delete_reservation("2")
    
    return "Send! Reservation to DB: " + res

if __name__ == "__main__":
    """ Main Function """
    app.run(host='0.0.0.0', port=5000)