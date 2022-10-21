package out.eat.eatout_api.external;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import out.eat.eatout_api.model.Status;
import out.eat.eatout_api.model.entitys.Reservation;
import out.eat.eatout_api.model.entitys.Restaurant;
import out.eat.eatout_api.model.entitys.User;
import out.eat.eatout_api.service.ReservationService;
import out.eat.eatout_api.service.UserRestaurantService;

import java.util.List;

import static org.hibernate.tool.schema.SchemaToolingLogging.LOGGER;

@Service
public class Bot {

    @Autowired
    private UserRestaurantService service;
    String url = "http://localhost:5001/send-message?msg=";

    public String obtainMessage(Reservation res){


        if (res==null) return "Error";

       LOGGER.info("RES: " + res.toString());

        String userData = "";
        userData = res.getNoUser();
        /*if (res.getIdUser().equals(26262626l)) userData = res.getNoUser();
        else {
            User user = service.obtainUser(res.getIdUser());
            userData = "Nombre: " + user.getName() + ", tel: " + user.getPhone() + ", mail: " + user.getMail();
        }
*/
        return ("\nDía " + res.getDate() + ", " + res.getTime()  +"hs, Cantidad de personas: "+ res.getGuests() +"\n"+ userData);
    }

    public String obtainResData(Reservation res) {
        Restaurant restaurant = service.obtainRestaurant(res.getIdRestaurant());
        if (restaurant == null) return "Error, restaurant no válido";
        return  "Restaurant " + restaurant.getName() + ". ID: " + restaurant.getId();
    }

    public String sendMessage(Reservation res){

        // obtainResData(res) +
        String msg =  "\n*¿Desea confirmar la reservación? " + res.getId() + "* \n" + obtainMessage(res) +  "\n\n Responde 'Rechazar " + res.getId() + "' para rechazarla." +
                ".\n Responde 'Confirmar " + res.getId() + "' para confirmarla.";

        try {
            RestTemplate rest = new RestTemplate();
            String result = rest.getForObject(url + msg.replace(' ', '_'), String.class);
            return result;
        } catch (Exception e) {
            return "Fallo la conexión con el bot. CONEXIÓN REHUSADA";
        }
    }

}
