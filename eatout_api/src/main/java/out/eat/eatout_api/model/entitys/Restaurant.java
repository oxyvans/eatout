package out.eat.eatout_api.model.entitys;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name="restaurants_restaurant")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String RestName;
    
    String location;

    String telephone;

    String descrip;

    public Restaurant() {
        super();
    }

    public Restaurant(Long id, String restName, String location, String telephone, String description) {
        super();
        this.id = id;
        this.RestName = restName;
        this.location = location;
        this.telephone = telephone;
        this.descrip = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRestName() {
        return RestName;
    }

    public void setRestName(String restName) {
        RestName = restName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getDescrip() {
        return descrip;
    }

    public void setDescrip(String description) {
        this.descrip = description;
    }
}
