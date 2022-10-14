package out.eat.eatout_api.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import out.eat.eatout_api.model.entitys.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}