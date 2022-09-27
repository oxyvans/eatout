package out.eat.holberton_school_C17.repository;

import org.springframework.stereotype.Component;
import out.eat.holberton_school_C17.model.data.Restaurant;

import java.util.Arrays;
import java.util.List;

@Component
public class RestaurantRepository {

    List<Restaurant> restaurants = Arrays.asList(
            new Restaurant("1", "Don Pepe", "Montevideo", "099876321", "Buenas empanadetas"),
            new Restaurant("2", "Mamma Mia", "Montevideo", "099876322", "Los mejores precios"),
            new Restaurant("3", "Pepperoni", "Montevideo", "099876323", "Pastas caseras"),
            new Restaurant("4", "Saladito de la costa", "PDE", "099876324", "Platos salados"),
            new Restaurant("5", "Doña Marta", "PDE", "099876325", "El mas gourmet"),
            new Restaurant("6", "El Oriental RestoBar", "PDE", "099876326", "Muy sabroso")
    );


    public List<Restaurant> getRestaurants() {
        return restaurants;
    }

    public void setRestaurants(List<Restaurant> restaurants) {
        this.restaurants = restaurants;
    }
    
    
}
