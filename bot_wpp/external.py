import json
import requests

def delete_reservation(val = None):
    if val is None:
        return "Error type None"
    try:
        url = f'http://35.247.214.17:8034/reservation/delete/{val}'
        x = requests.delete(url)
        return (x.text)
    except Exception as e:
        return "Error" + str(e)

def update_status(val = None):
    if val is None:
        return "Error type None"
    try:
        url = f"http://35.247.214.17:8034/reservation/update-status/{val}"
        x = requests.put(url)
        return (x.text)
    except Exception as e:
        return "Error" + str(e)

def pending_reservations(val = None):
    if val is None:
        return "Error type None"
    try:
        url = f"http://35.247.214.17:8034/reservation/views/restaurant/{val}/awaiting"
        x = requests.get(url)
        return x.json()["bot"])
    except Exception as e:
        return "Error" + str(e)

def confirmed_reservations(val = None):
    if val is None:
        return "Error type None"
    try:
        url = f"http://35.247.214.17:8034/reservation/views/restaurant/{val}/confirmed"
        x = requests.get(url)
        return x.json()["bot"]
    except Exception as e:
        return "Error" + str(e)
