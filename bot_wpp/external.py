import json
import requests
from reservation import Reservation

def confirmation_reservation(reservation = None):
    if (reservation is None):
        return "Error type None"
    elif (type(reservation) is not (Reservation)):
        return "Not type Reservation"
    
    try:
        print(f"confirmation reservation Día {reservation.time}, Hora: {reservation.date}, Cantidad de personas: {reservation.guests}." )
        url = 'http://localhost:8034/reservation/add'
    
        print(reservation.to_dict())
        x = requests.post(url, json = (reservation.to_dict()))
        return (x.text)
    except Exception as e:
        return "Error " + str(e)