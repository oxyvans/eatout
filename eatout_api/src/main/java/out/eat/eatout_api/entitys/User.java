package out.eat.eatout_api.entitys;

import javax.persistence.*;

@Entity
@Table(name="User")
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

    public String getLastname() {
        return phone;
    }

    public void setLastname(String lastname) {
        this.phone = lastname;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }
}
