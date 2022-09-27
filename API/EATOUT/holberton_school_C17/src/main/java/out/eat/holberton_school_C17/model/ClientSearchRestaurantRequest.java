package out.eat.holberton_school_C17.model;

public class ClientSearchRestaurantRequest {
    String name;
    String ubicacion;

    public ClientSearchRestaurantRequest(String name, String ubicacion) {
        this.name = name;
        this.ubicacion = ubicacion;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }
}
