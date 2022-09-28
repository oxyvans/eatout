# API EAT OUT

## Requiered technologies:
- Maven
- Java 11
- Spring

## How to use?
1. Clone dir EATOUT
2. Command: mvn spring-boot:run

## API Response: Object ClientSearchRestaurantResponse
- Atributes: List<Restaurant> restaurants;

#### Example response:
{
"restaurantsResponse": [
{
"id": "1",
"name": "Don Pepe",
"location": "Montevideo",
"phoneNumber": "099876321",
"description": "Buenas empanadetas"
}
]
}


## PATHS: SNAKE_CASE example: Doña Marta --> Doña_Marta

All restaurants:
- http://localhost:9292/eatout/restaurants

Restaurants by ubication y name:
- http://localhost:9292/eatout/restaurants?name=Don_Pepe&ubication=Montevideo

Restaurants by ubication:
- http://localhost:9292/eatout/restaurants?&ubication=PDE
- http://localhost:9292/eatout/restaurants?&ubication=Montevideo

Restaurants by name:
- http://localhost:9292/eatout/restaurants?name=Doña_Marta
