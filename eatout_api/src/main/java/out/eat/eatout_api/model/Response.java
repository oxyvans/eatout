package out.eat.eatout_api.model;

import org.springframework.http.HttpStatus;
import out.eat.eatout_api.model.entitys.Reservation;

public class Response {
    Status status;
    String msg;

    Reservation reservation;

    public Response(Status status, String msg) {
        this.status = status;
        this.msg = msg;
        this.reservation = null;
    }

    public Response(Status status, String msg, Reservation reservation) {
        this.status = status;
        this.msg = msg;
        this.reservation = reservation;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
