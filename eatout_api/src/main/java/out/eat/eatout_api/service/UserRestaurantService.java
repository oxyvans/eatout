package out.eat.eatout_api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import out.eat.eatout_api.dao.RestaurantRepository;
import out.eat.eatout_api.dao.UserRepository;
import out.eat.eatout_api.model.entitys.Restaurant;
import out.eat.eatout_api.model.entitys.User;

import java.util.Optional;

@Service
public class UserRestaurantService {

    @Autowired
    private UserRepository repoUser;

    @Autowired
    private RestaurantRepository repoRestaurant;

    public Restaurant obtainRestaurant(Long val){
        Optional<Restaurant> res = repoRestaurant.findById(val);
        if (res.isEmpty()) return null;
        else return res.;
    }

    public User obtainUser(Long val){
        Optional<User> res = repoUser.findById(val);
        if (res.isEmpty()) return null;
        else return res.get();
    }

}
