from flask import Flask, request, Response
import requests
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

@app.route("/", methods=["POST"])
def bot():
    user_msg = request.values.get('Body', '').lower()
    bot_resp = MessagingResponse()
    msg = bot_resp.message()
    
    if 'hello' in user_msg:
        msg.body("Hola como tas rey")
    elif 'bien y tu?' in user_msg:
        msg.body("Bien ak tranq")
    else:
        msg.body("Habla bien down")
    return Response(str(bot_resp), mimetype="application/xml"), 200

if __name__ == "__main__":
    app.run(debug=True)
