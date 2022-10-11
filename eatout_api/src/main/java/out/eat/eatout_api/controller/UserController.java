package out.eat.eatout_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import out.eat.eatout_api.dao.UserRepository;
import out.eat.eatout_api.entitys.User;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="/user")
public class UserController {

    @Autowired
    private UserRepository repo;

    @PostMapping("/add")
    public User add(@RequestBody User val) {
        return repo.save(val);
    }

    @GetMapping("/views")
    public List<User> views(){
        return repo.findAll();
    }

    @GetMapping("/views/{val}")
    public Optional<User> views(@PathVariable Long val) {
        return repo.findById(val);
    }

    @PutMapping("/update")
    public User views(@RequestBody User val) {
        return repo.save(val);
    }

    @DeleteMapping("/delete/{val}")
    public String delete(@PathVariable Long val) {
        repo.deleteById(val);
        return "Id : " + val + " delete";
    }
}
