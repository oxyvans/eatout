package out.eat.eatout_api.model.entitys;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name="restaurant_restaurants")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @JsonProperty("RestName")
    String name;

    @JsonProperty("location")
    String location;

    @JsonProperty("telephone")
    String number;

    @JsonProperty("descrip")
    String description;

    public Restaurant() {
        super();
    }

    public Restaurant(Long id, String name, String location, String number, String description) {
        super();
        this.id = id;
        this.name = name;
        this.location = location;
        this.number = number;
        this.description = description;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
