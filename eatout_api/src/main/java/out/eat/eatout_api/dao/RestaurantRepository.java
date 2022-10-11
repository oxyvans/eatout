package out.eat.eatout_api.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import out.eat.eatout_api.entitys.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
}