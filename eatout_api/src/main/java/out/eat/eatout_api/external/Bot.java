package out.eat.eatout_api.external;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import out.eat.eatout_api.model.Status;
import out.eat.eatout_api.model.entitys.Reservation;
import out.eat.eatout_api.model.entitys.User;

import java.util.List;

@Service
public class Bot {

    String url = "http://localhost:5001/send-message?msg=";

    public String sendMessage(Reservation res){

        String msg = "Día " + res.getDate() + ", Hora: " + res.getTime()  +", Cantidad de personas: "+ res.getGuests() +".\n Responde 'Rechazar " + res.getId() + "' para rechazarla." +
                ".\n Responde 'Confirmar " + res.getId() + "' para confirmarla.";

        RestTemplate rest = new RestTemplate();
        String result = rest.getForObject(url + msg.replace(' ', '_'), String.class);

        return result;

    }

}
