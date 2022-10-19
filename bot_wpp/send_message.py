#!/usr/bin/python3
#SCRIPT TO SEND A CONFIRMATION WPP OF THE RESERVATION

from twilio.rest import Client

sid = "AC67d842d94a0a36fb7c4252f0ff330ef8"
token = "011a5b642a58feb26d417c3e46efad7d"
# client credentials are read from TWILIO_ACCOUNT_SID and AUTH_TOKEN
client = Client(sid, token)

# this is the Twilio sandbox testing number
from_whatsapp_number='whatsapp:+14155238886'
# replace this number with your own WhatsApp Messaging number
to_whatsapp_number='whatsapp:+59898838698'

client.messages.create(body='Confirmation wpp test!',
                       from_=from_whatsapp_number,
                       to=to_whatsapp_number)

