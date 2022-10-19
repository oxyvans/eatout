package out.eat.eatout_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import out.eat.eatout_api.model.entitys.Reservation;
import out.eat.eatout_api.model.Response;
import out.eat.eatout_api.service.ReservationService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="/reservation")
public class ReservationController {

    @Autowired
    private ReservationService service;

    @PostMapping("/add")
    public Response add(@RequestBody Reservation val) {
        return service.add(val);
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
}
