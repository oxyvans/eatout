package out.eat.holberton_school_C17.model;


import out.eat.holberton_school_C17.model.data.Restaurant;

import java.util.List;

public class ClientSearchRestaurantResponse {

    List<Restaurant> restaurantsResponse;

    public ClientSearchRestaurantResponse(List<Restaurant> restaurantsResponse) {
        this.restaurantsResponse = restaurantsResponse;
    }

    public List<Restaurant> getRestaurantsResponse() {
        return restaurantsResponse;
    }

    public void setRestaurantsResponse(List<Restaurant> restaurantsResponse) {
        this.restaurantsResponse = restaurantsResponse;
    }


}
