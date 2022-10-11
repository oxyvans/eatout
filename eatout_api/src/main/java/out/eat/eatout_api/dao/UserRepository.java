package out.eat.eatout_api.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import out.eat.eatout_api.entitys.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
