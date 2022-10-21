package out.eat.eatout_api.model.entitys;

import javax.persistence.*;

@Entity
@Table(name="users_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    String phone;
    String mail;

    public User() {
        super();
    }

    public User(Long id, String name, String lastname, String mail) {
        super();
        this.id = id;
        this.name = name;
        this.phone = lastname;
        this.mail = mail;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }
}
