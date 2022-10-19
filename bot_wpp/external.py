import json
import requests

def delete_reservation(Id = None):
    if Id is None:
        return "Error type None"
    try:
        url = f'http://35.247.214.17:8034/reservation/delete/{Id}'
        x = requests.delete(url)
        return (x.text)
    except Exception as e:
        return "Error" + str(e)

def update_status(Id = None):
    if Id is None:
        return "Error type None"
    try:
        url = f"http://35.247.214.17:8034/reservation/update-status/{Id}"
        x = requests.put(url)
        return x.text
    except Exception as e:
        return "Error" + str(e)
