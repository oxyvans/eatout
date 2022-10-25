package out.eat.eatout_api.model.entitys;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name="restaurant_restaurants")
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

    public Restaurant(Long id, String name, String location, String number, String description) {
        super();
        this.id = id;
        this.RestName = name;
        this.location = location;
        this.telephone = number;
        this.descrip = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return RestName;
    }

    public void setName(String name) {
        this.RestName = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getNumber() {
        return telephone;
    }

    public void setNumber(String number) {
        this.telephone = number;
    }

    public String getDescription() {
        return descrip;
    }

    public void setDescription(String description) {
        this.descrip = description;
    }
}
