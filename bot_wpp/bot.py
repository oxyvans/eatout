#WPP CHATBOT LOGIC FOR CLIENT TO ACCEPT OR DECLINE RESERVATION
from flask import Flask, request, Response
import requests
from external import delete_reservation, update_status
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

@app.route("/", methods=["POST"])
def bot():
    user_msg = request.values.get('Body', '').lower()
    bot_resp = MessagingResponse()
    msg = bot_resp.message()
    
    if 'Confirmar' in user_msg:
        res = user_msg.split(' ')[1]
        res = update_status(id)
        if ("ERROR" in res):
            msg.body(f"No se pudo confirmar la reserva.")
        else:
            msg.body(f"Se confirma la reserva {id}.")
        #return "1"
    elif 'Rechazar' in user_msg:
        id = user_msg.split(' ')[1]
        res = delete_reservation(id)
        if ("ERROR" in res):
            msg.body(f"No se pudo cancelar la reserva.")
        else:
            msg.body(f"Reserva {id} rechazada.")
        #return "0"
    else:
        msg.body("No reconozco ese mensaje. Intente nuevamente.")
    return Response(str(bot_resp), mimetype="application/xml"), 200

if __name__ == "__main__":
    app.run(debug=True)
