package out.eat.eatout_api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import out.eat.eatout_api.dao.ReservationRepository;
import out.eat.eatout_api.external.Bot;
import out.eat.eatout_api.model.ReservationStatus;
import out.eat.eatout_api.model.ResponseBot;
import out.eat.eatout_api.model.entitys.Reservation;
import out.eat.eatout_api.model.Response;
import out.eat.eatout_api.model.Status;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository repo;

    @Autowired
    private Bot bot;

    public Response add(Reservation val) {
        try {
            Reservation res = repo.save(val);
            return new Response(Status.OK, res.getId().toString(), res);
        } catch (Exception e) {
            return new Response(Status.ERROR, e.getMessage());
        }
    }

    public List<Reservation> views(){
        return repo.findAll();
    }

    public Optional<Reservation> views(Long val) {
        return repo.findById(val);
    }

    public List<Reservation> viewsRestaurant(Long val) {
        List<Reservation> all = repo.findAll();
        return all.stream().filter(x -> Objects.equals(x.getIdRestaurant(), val)).collect(Collectors.toList());
    }

    public List<Reservation> viewsUser(Long val) {
        List<Reservation> all = repo.findAll();
        return all.stream().filter(x -> Objects.equals(x.getIdUser(), val)).collect(Collectors.toList());
    }
    public Response updateStatus(Long val) {

        Optional<Reservation> res =  repo.findById(val);
        if (res.isPresent()) {
            Reservation reservation = res.stream().collect(Collectors.toList()).get(0);
            reservation.setStatus(ReservationStatus.CONFIRMED);
            return update(reservation);
        } else {
            return new Response(Status.ERROR, "Id not valid");
        }
    }

    public Response update(Reservation val) {
        List<Reservation> all = repo.findAll();
        if (all.size() == 0) {  return new Response(Status.ERROR, "Lista de reservaciones vacía"); }

        // si la reserva ya existe la actualizo
        if (all.stream().filter(x -> Objects.equals(x.getId(), val.getId())).collect(Collectors.toList()).size() > 0) {

            try {
                Reservation res = repo.save(val);
                if (res.getStatus().equals(ReservationStatus.CONFIRMED)) return new Response(Status.OK, "Reservación confirmada.");
                else return new Response(Status.OK, "Reservacion actualizada", res);
            } catch (Exception e) {
                return new Response(Status.ERROR, e.getMessage());
            }
        } else {
            return new Response(Status.ERROR, "Requiere id de reservacion. Id not found.");
        }

    }

    public Response delete(Long val) {

        try {
            repo.deleteById(val);
            return new Response(Status.OK, "Reservation id: " + val + " delete");
        } catch (Exception e) {
            return new Response(Status.ERROR, e.getMessage());
        }
    }

    public ResponseBot viewsRestaurantConfirmed(Long val) {

        List<Reservation> all = repo.findAll();
        if (all.size() == 0) return new ResponseBot("No hay reservaciones.", all);
        if (!(all.stream().anyMatch(x -> x.getIdRestaurant().equals(val)))) return new ResponseBot("Id no válido", null);


        List<Reservation> filteredList = all.stream().filter(x -> Objects.equals(x.getIdRestaurant(), val) && x.getStatus().equals(ReservationStatus.CONFIRMED)).collect(Collectors.toList());

        if (filteredList.size() == 0) return new ResponseBot("No tienes reservaciones confirmadas.", filteredList);
        else {
            // bot.obtainResData(filteredList.get(0)) +
            String msg = "\n *Reservas confirmadas:* \n";

            String msg_ = filteredList.stream().map(x -> "*RESERVACION ID: " + x.getId() + "*" + bot.obtainMessage(x)).reduce(msg, (x, y) -> (x + "\n\n" + y));

            msg_ += "\n\nResponde 'Rechazar {id}' para rechazarla.";
            return new ResponseBot(msg_, filteredList);
        }
    }

    public ResponseBot viewsRestaurantAwaiting(Long val) {

        List<Reservation> all = repo.findAll();
        if (all.size() == 0) return new ResponseBot("No hay reservaciones.", all);
        if (!(all.stream().anyMatch(x -> x.getIdRestaurant().equals(val)))) return new ResponseBot("Id no válido", null);


        List<Reservation> filteredList = all.stream().filter(x -> Objects.equals(x.getIdRestaurant(), val) && x.getStatus().equals(ReservationStatus.AWAITING)).collect(Collectors.toList());

        if (filteredList.size() == 0) return new ResponseBot("No tienes reservaciones pendientes.", filteredList);
        else {
            // bot.obtainResData(filteredList.get(0)) +
            String msg =  "\n *Confirmaciones pendientes:* \n";

            String msg_ = filteredList.stream().map(x -> "*RESERVACION ID: " + x.getId() + "*" + bot.obtainMessage(x)).reduce(msg, (x, y) -> (x + "\n\n" + y));

            msg_ += "\n\nResponde 'Rechazar {id}' para rechazarla." +
                    ".\nResponde 'Confirmar {id}' para confirmarla.";

            return new ResponseBot(msg_, filteredList);
        }

    }

}
