package out.eat.eatout_api.entitys;

import javax.persistence.*;

@Entity
@Table(name="Reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    Long idUser;

    Long idRestaurant;

    String date;

    String time;

    Integer guests;

    public Reservation() { super(); }

    public Reservation(Long id, Long idUser, Long idRestaurant, String date, String time, Integer guests) {
        super();
        this.id = id;
        this.idUser = idUser;
        this.idRestaurant = idRestaurant;
        this.date = date;
        this.time = time;
        this.guests = guests;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public Long getIdRestaurant() {
        return idRestaurant;
    }

    public void setIdRestaurant(Long idRestaurant) {
        this.idRestaurant = idRestaurant;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Integer getGuests() {
        return guests;
    }

    public void setGuests(Integer guests) {
        this.guests = guests;
    }
}
