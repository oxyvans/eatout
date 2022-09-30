package out.eat.reservationsAPI.model;

import org.springframework.stereotype.Component;

public class ResponseReservation {

    private String message;

    public ResponseReservation(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
