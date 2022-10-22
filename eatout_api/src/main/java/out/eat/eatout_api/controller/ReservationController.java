package out.eat.eatout_api.controller;

import ch.qos.logback.core.encoder.EchoEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import out.eat.eatout_api.external.Bot;
import out.eat.eatout_api.model.ReservationStatus;
import out.eat.eatout_api.model.ResponseBot;
import out.eat.eatout_api.model.entitys.Reservation;
import out.eat.eatout_api.model.Response;
import out.eat.eatout_api.service.ReservationService;

import java.util.List;
import java.util.Optional;

import static org.hibernate.tool.schema.SchemaToolingLogging.LOGGER;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RequestMapping(path="/reservation")
public class ReservationController {

    @Autowired
    private ReservationService service;

    @Autowired
    private Bot bot;

    @PostMapping("/add")
    public Response add(@RequestBody Reservation val) {

        val.setStatus(ReservationStatus.AWAITING);
        Response res = service.add(val);
        res.setMsg(bot.sendMessage(res.getReservation()));
        return res;
    }

    @PostMapping("/addNoUser")
    public Response addNoUser(@RequestBody Reservation val, @RequestParam String name, @RequestParam String tel, @RequestParam String mail) {

        LOGGER.info("Add no user");
        val.setStatus(ReservationStatus.AWAITING);
        val.setNoUser("Nombre: " + name + ", tel: " + tel + ", mail: " + mail);
        val.setIdUser(null);
        Response res = service.add(val);
        try {
            res.setMsg(bot.sendMessage(res.getReservation()));
        } catch (Exception e) {
            res.setMsg(e.getMessage());
        }
        return res;
    }


    @GetMapping("/views")
    public List<Reservation> views(){
        return service.views();
    }

    @GetMapping("/views/{val}")
    public Optional<Reservation> views(@PathVariable Long val) {
        return service.views(val);
    }

    @GetMapping("/views/restaurant/{val}")
    public List<Reservation> viewsRestaurant(@PathVariable Long val) {
        return service.viewsRestaurant(val);
    }

    @GetMapping("/views/user/{val}")
    public List<Reservation> viewsUser(@PathVariable Long val) {
        return service.viewsUser(val);
    }

    @PutMapping("/update")
    public Response update(@RequestBody Reservation val) {
        return service.update(val);
    }

    @PutMapping("/update-status/{val}")
    public Response updateStatus(@PathVariable Long val) {
        return service.updateStatus(val);
    }

    @DeleteMapping("/delete/{val}")
    public Response delete(@PathVariable Long val) { return service.delete(val); }

    @GetMapping("")
    public String reservation(){
        return "Requests admited: https://documenter.getpostman.com/view/23199255/2s83zpK1fw";
    }

    @GetMapping("/views/restaurant/{val}/confirmed")
    public ResponseBot viewsRestaurantConfirmed(@PathVariable Long val) {
        return service.viewsRestaurantConfirmed(val);
    }

    @GetMapping("/views/restaurant/{val}/awaiting")
    public ResponseBot viewsRestaurantAwaiting(@PathVariable Long val) {
        return service.viewsRestaurantAwaiting(val);
    }

}
