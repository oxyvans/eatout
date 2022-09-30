package out.eat.reservationsAPI.externalConections;


import org.springframework.stereotype.Component;
import out.eat.reservationsAPI.model.mysqlClasses.Reservation;
import out.eat.reservationsAPI.model.ReservationStatus;

import java.sql.*;

@Component
public class ReservationsDatabaseConnection {
    private static String sqlSelectAllReservations = "SELECT * FROM reservations";

    private static String connectionUrl = "jdbc:mysql://localhost:3306/eatout_db";

    public ReservationStatus setReservation(Reservation reservation) throws SQLException, ClassNotFoundException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        try (Connection conn = DriverManager.getConnection(connectionUrl, "user1", "passuser1");
             PreparedStatement ps = conn.prepareStatement(sqlSelectAllReservations);
             ResultSet rs = ps.executeQuery()) {

            String values = " VALUES(" + reservation.getId() + ",'" + reservation.getUser() + "','" + reservation.getRestaurant() + "','" + reservation.getDate() + "','" + reservation.getTime() + "','" + reservation.getGuests() + "')";
            String insertSql = "INSERT INTO reservations" + values;

            System.out.println(insertSql);

            ps.executeUpdate(insertSql);
            System.out.println("Insert ps.getUpdateCount " + ps.getUpdateCount());
            if (ps.getUpdateCount() == 1) { return ReservationStatus.OK; }
            return ReservationStatus.ALREADY_EXISTS;

        } catch (SQLException e) {
            // handle the exception
            System.out.println("No se pudo insertar data de MySQL" + e.getMessage());
            return ReservationStatus.ERROR;
        }

    }


}
