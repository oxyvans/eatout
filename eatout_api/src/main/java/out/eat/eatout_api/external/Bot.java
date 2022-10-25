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

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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

        if (res.getNoUser() == null) {
            User user = service.obtainUser(res.getIdUser());
            if (user == null) userData = "Usuario no encontrado, id: " + res.getIdUser();
            else userData = "Nombre: " + user.getUsername() + ", Tel: " + user.getTelephone() + ", Email: " + user.getEmail();
        } else userData = res.getNoUser();

        String date_ = "";
        try {
            LocalDate date = LocalDate.parse(res.getDate());
            LocalDate hoy = LocalDate.now();
            if (date.isEqual(hoy)) date_ = "Hoy a las ";
            else if (date.isEqual(hoy.plusDays(1))) date_ = "Mañana a las ";
            else {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("El dia dd de MM a las");
                date_ = formatter.format(date);
            }

        } catch (Exception e) {date_ = "\nDía A" + res.getDate();}

        return (date_ + ", " + res.getTime()  +"hs, Cantidad de personas: "+ res.getGuests() +"\n"+ userData);
    }

    public String obtainResData(Reservation res) {
        Restaurant restaurant = service.obtainRestaurant(res.getIdRestaurant());
        if (restaurant == null) return "Restaurant id no encontrado"; // id no valido
        return  "Restaurant " + restaurant.getLocation() + ". ID: " + restaurant.getId();
    }

    public String sendMessage(Reservation res){


        String msg = obtainResData(res) + "\n*¿Desea confirmar la reservación? ID: " + res.getId() + "* \n" + obtainMessage(res) +  "\n\nResponde 'Rechazar " + res.getId() + "' para rechazarla." +
                ".\nResponde 'Confirmar " + res.getId() + "' para confirmarla.";

        try {
            RestTemplate rest = new RestTemplate();
            String result = rest.getForObject(url + msg.replace(' ', '_'), String.class);
            return result;
        } catch (Exception e) {
            return "Fallo la conexión con el bot. CONEXIÓN REHUSADA";
        }
    }

}
