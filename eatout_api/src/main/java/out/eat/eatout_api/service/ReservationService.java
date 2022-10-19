package out.eat.eatout_api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import out.eat.eatout_api.dao.ReservationRepository;
import out.eat.eatout_api.model.ReservationStatus;
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

    public Response add(Reservation val) {
        try {
            Reservation res = repo.save(val);
            return new Response(Status.OK, res.getId().toString() ,res);
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
                return new Response(Status.OK, "Reservacion actualizada", res);
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

}
