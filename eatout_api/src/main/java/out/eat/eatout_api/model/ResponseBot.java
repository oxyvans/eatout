package out.eat.eatout_api.model;

import out.eat.eatout_api.model.entitys.Reservation;

import java.util.List;

public class ResponseBot {
    String bot;
    List<Reservation> reservations;

    public ResponseBot(String bot, List<Reservation> reservations) {
        this.bot = bot;
        this.reservations = reservations;
    }

    public String getBot() {
        return bot;
    }

    public void setBot(String bot) {
        this.bot = bot;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }
}
