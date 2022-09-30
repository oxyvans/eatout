package out.eat.reservationsAPI.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import out.eat.reservationsAPI.externalConections.ReservationsDatabaseConnection;
import out.eat.reservationsAPI.model.ResponseReservation;
import out.eat.reservationsAPI.model.mysqlClasses.Reservation;
import out.eat.reservationsAPI.model.ReservationStatus;

import java.sql.SQLException;

@Service
public class BuildReservationsService {

    @Autowired
    ReservationsDatabaseConnection reservationsDatabaseConnection;

    public ResponseReservation getReservation(Reservation request) throws SQLException, ClassNotFoundException {

        ReservationStatus status = reservationsDatabaseConnection.setReservation(request);

        if (status.equals(ReservationStatus.OK)) { return new ResponseReservation("RESERVATION ADDED OK!");}
        if (status.equals(ReservationStatus.ERROR)) { return new ResponseReservation("RESERVATION ADDED ERROR"); }
        return new ResponseReservation("RESERVATION ALREAFY EXISTS");


    }
}
