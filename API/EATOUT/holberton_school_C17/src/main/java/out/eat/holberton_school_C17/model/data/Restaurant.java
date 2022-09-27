package out.eat.holberton_school_C17.model.data;

public class Restaurant {
    private String id;
    private String name;
    private String location;
    private String phoneNumber;
    private String description;

    public Restaurant(String id, String name, String location, String phoneNumber, String description) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.phoneNumber = phoneNumber;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
