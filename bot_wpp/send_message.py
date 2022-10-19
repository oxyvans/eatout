#!/usr/bin/python3
#SCRIPT TO SEND A CONFIRMATION WPP OF THE RESERVATION

def send_message(msg):
    from twilio.rest import Client

    sid = "AC67d842d94a0a36fb7c4252f0ff330ef8"
    token = "837fd75acb0f367c6ea1d97a93792fc8"
    # client credentials are read from TWILIO_ACCOUNT_SID and AUTH_TOKEN
    client = Client(sid, token)

    # this is the Twilio sandbox testing number
    from_whatsapp_number='whatsapp:+14155238886'
    # replace this number with your own WhatsApp Messaging number
    to_whatsapp_number='whatsapp:+59898838698'

    msg = f"¿Desea confirmar la reservacion? {msg}" 

    client.messages.create(body=msg,
                           from_=from_whatsapp_number,
                           to=to_whatsapp_number)

