package out.eat.holberton_school_C17.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import out.eat.holberton_school_C17.model.ClientSearchRestaurantRequest;
import out.eat.holberton_school_C17.model.ClientSearchRestaurantResponse;
import out.eat.holberton_school_C17.serialize.Serializator;
import out.eat.holberton_school_C17.service.RestaurantSearchService;

@RestController
public class ClientRequestController {

    @Autowired
    private RestaurantSearchService service;
    @Autowired
    private Serializator serializator;

    private static Logger LOGGER = LoggerFactory.getLogger(ClientRequestController.class);


    @GetMapping(value = "/restaurants", produces = "application/json")
    public String getRestaurants(@RequestParam(defaultValue = "") String name, @RequestParam(defaultValue = "") String ubicacion) {


        ClientSearchRestaurantRequest request = new ClientSearchRestaurantRequest(name.replace('_', ' '), ubicacion.replace('_', ' '));
        LOGGER.info("Request: " + request.getName() + " " + request.getUbicacion());

        ClientSearchRestaurantResponse responseRestaurants = service.searchRestaurants(request);
        String jsonResponse = serializator.serialize(responseRestaurants);
        return jsonResponse;
    }


}
