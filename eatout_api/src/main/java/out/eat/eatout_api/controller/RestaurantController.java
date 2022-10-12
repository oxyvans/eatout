package out.eat.eatout_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import out.eat.eatout_api.dao.RestaurantRepository;
import out.eat.eatout_api.entitys.Restaurant;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="/restaurant")
public class RestaurantController {

    @Autowired
    private RestaurantRepository repo;

    @PostMapping("/add")
    public Restaurant add(@RequestBody Restaurant val) {
        return repo.save(val);
    }

    @GetMapping("/views")
    public List<Restaurant> views(){
        return repo.findAll();
    }

    @GetMapping("/views/{val}")
    public Optional<Restaurant> views(@PathVariable Long val) {
        return repo.findById(val);
    }

    @PutMapping("/update")
    public Restaurant views(@RequestBody Restaurant val) {
        return repo.save(val);
    }

    @DeleteMapping("/delete/{val}")
    public String delete(@PathVariable Long val) {
        repo.deleteById(val);
        return "Id : " + val + " delete";
    }
}

