package out.eat.holberton_school_C17.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import out.eat.holberton_school_C17.model.ClientSearchRestaurantRequest;
import out.eat.holberton_school_C17.model.ClientSearchRestaurantResponse;
import out.eat.holberton_school_C17.model.data.Restaurant;
import out.eat.holberton_school_C17.repository.RestaurantRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RestaurantSearchService {

    @Autowired
    private RestaurantRepository repository;

    public ClientSearchRestaurantResponse searchRestaurants(ClientSearchRestaurantRequest request) {

        String ubicacion = request.getUbicacion();
        String name = request.getName();
        List<Restaurant> allRestaurants = repository.getRestaurants();

        if (ubicacion.equals("") && name.equals("")) {return new ClientSearchRestaurantResponse(allRestaurants); }

        // si pasan nombre y NO ubicacion
        if (ubicacion.equals("") && !(name.equals(""))) {
            allRestaurants = allRestaurants.stream().filter(r -> r.getName().equals(name)).collect(Collectors.toList());

        // si pasan UBICACION y NO nombre
        } else if (!(ubicacion.equals("")) && name.equals("")) {

            allRestaurants = allRestaurants.stream().filter(r -> r.getLocation().equals(ubicacion)).collect(Collectors.toList());

        // si pasan UBICACION y NOMBRE
        } else if (!(ubicacion.equals("")) && !(name.equals(""))) {

            allRestaurants = allRestaurants.stream().filter(r -> r.getLocation().equals(ubicacion) && r.getName().equals(name)).collect(Collectors.toList());
        }
        return new ClientSearchRestaurantResponse(allRestaurants);
    }

}
