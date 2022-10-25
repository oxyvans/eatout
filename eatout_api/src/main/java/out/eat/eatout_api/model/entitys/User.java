package out.eat.eatout_api.model.entitys;

import javax.persistence.*;

@Entity
@Table(name="users_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String username;
    String telephone;
    String email;

    public User() {
        super();
    }

    public User(Long id, String name, String lastname, String mail) {
        super();
        this.id = id;
        this.username = name;
        this.telephone = lastname;
        this.email = mail;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
