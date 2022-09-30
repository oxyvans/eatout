# API that manage RESERVATIONS

## Requiered technologies:
- Maven
- Java 11
- Spring

## How to use?
1. Clone dir
2. Command: mvn spring-boot:run

## API Response: Object ResponseReservation
- Atributes: String message;

#### Example response:
{
"message": "RESERVATION ADDED OK!"
}


## Example:
- http://localhost:9190/eatout/restaurants/idRestaurant/reservation?guests=4&idUser=user2626&date=2022-09-29&time=22:00
