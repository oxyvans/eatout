#WPP CHATBOT LOGIC FOR CLIENT TO ACCEPT OR DECLINE RESERVATION
from flask import Flask, request, Response
import requests
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

@app.route("/", methods=["POST"])
def bot():
    user_msg = request.values.get('Body', '').lower()
    bot_resp = MessagingResponse()
    msg = bot_resp.message()
    
    if 'si' in user_msg:
        msg.body("Se confirma la reserva.")
        #return "1"
    elif 'no' in user_msg:
        msg.body("Reserva rechazada.")
        #return "0"
    else:
        msg.body("No reconozco ese mensaje. Intente nuevamente.")
    return Response(str(bot_resp), mimetype="application/xml"), 200

if __name__ == "__main__":
    app.run(debug=True)
