package out.eat.reservationsAPI.model.mysqlClasses;


import java.util.UUID;

public class Reservation {

    private long id;

    private String user;

    private String restaurant;

    private String date;

    private String time;

    private Integer guests;


    public Reservation(String user, String restaurant, String date, String time, Integer guests) {
        this.id = 11;
        this.user = user;
        this.restaurant = restaurant;
        this.date = date;
        this.time = time;
        this.guests = guests;
    }

    public Reservation(long id, String user, String restaurant, String date, String time, Integer guests) {
        this.id = id;
        this.user = user;
        this.restaurant = restaurant;
        this.date = date;
        this.time = time;
        this.guests = guests;
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", user='" + user + '\'' +
                ", restaurant='" + restaurant + '\'' +
                ", date='" + date + '\'' +
                ", time='" + time + '\'' +
                ", guests=" + guests +
                '}';
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(String restaurant) {
        this.restaurant = restaurant;
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
