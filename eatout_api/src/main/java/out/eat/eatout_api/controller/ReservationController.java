package out.eat.eatout_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import out.eat.eatout_api.dao.ReservationRepository;
import out.eat.eatout_api.entitys.Reservation;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="/reservation")
public class ReservationController {

    @Autowired
    private ReservationRepository repo;

    @PostMapping("/add")
    public Reservation add(@RequestBody Reservation val) {
        return repo.save(val);
    }

    @GetMapping("/views")
    public List<Reservation> views(){
        return repo.findAll();
    }

    @GetMapping("/views/{val}")
    public Optional<Reservation> views(@PathVariable Long val) {
        return repo.findById(val);
    }

    @PutMapping("/update")
    public Reservation views(@RequestBody Reservation val) {
        return repo.save(val);
    }

    @DeleteMapping("/delete/{val}")
    public String delete(@PathVariable Long val) {
        repo.deleteById(val);
        return "Id : " + val + " delete";
    }
}
