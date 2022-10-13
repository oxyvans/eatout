from flask import Flask, request
import requests
from twilio.twiml.messaging_response import MessagingResponse
 
incoming_msg = request.values.get('Body', '').lower()

response = MessagingResponse()
msg = response.message()
msg.body('this is the response/reply  from the bot.')
         

# chatbot logic
def bot():
 
    # user input
    user_msg = request.values.get('Body', '').lower()
 
    # creating object of MessagingResponse
    response = MessagingResponse()

    # displaying result
    msg = response.message("hola")
 
    return str(response)