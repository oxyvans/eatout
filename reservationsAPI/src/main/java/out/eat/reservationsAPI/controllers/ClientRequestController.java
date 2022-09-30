package out.eat.reservationsAPI.controllers;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import out.eat.reservationsAPI.serializator.Serializator;
import out.eat.reservationsAPI.model.ResponseReservation;
import out.eat.reservationsAPI.model.mysqlClasses.Reservation;
import out.eat.reservationsAPI.services.BuildReservationsService;

import java.sql.SQLException;

@RestController
public class ClientRequestController {

    @Autowired
    private BuildReservationsService service;
    @Autowired
    private Serializator serializator;

    private static Logger LOGGER = LoggerFactory.getLogger(ClientRequestController.class);

    // http://localhost:9190/eatout/restaurants/idRestaurantUnico/reservation?guests=4&idUserUnico=user2626&date=2022-09-29&time=22:00

    @GetMapping(value = "/restaurants/{id}/reservation", produces = "application/json")
    public String getReservation(@PathVariable String id, @RequestParam(defaultValue = "2") Integer guests, @RequestParam(defaultValue = "idUserFake") String idUser, @RequestParam(defaultValue = "DateFake") String date , @RequestParam(defaultValue = "TimeFake") String time) throws SQLException, ClassNotFoundException {

        Reservation request = new Reservation(idUser, id, date, time, guests);
        LOGGER.debug("Request: OK");

        ResponseReservation responseReservation = service.getReservation(request);
        String jsonResponse = serializator.serialize(responseReservation);
        return jsonResponse;
    }

}
