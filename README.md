# API that manage RESERVATIONS
Requests admited: https://documenter.getpostman.com/view/23199255/2s83zpK1fw

## Requiered technologies:
- Maven
- Java 11
- Spring

## Guide to install requeriments in UBUNTU os:


To install:
For linux-x64.deb: https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html

run commands: 
- sudo apt update

- java -version
openjdk version "11.0.16" 2022-07-19 LTS

- cd $HOME

- wget https://archive.apache.org/dist/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz

- tar -xvf apache-maven-3.6.3-bin.tar.gz

### Java & Maven como variables de entorno
Editar el .bashrc de su usuario y agregar al final del mismo las siguientes variables con los correspondientes paths:
#### AGREGADAS
export JAVA_HOME="/usr/lib/jvm/java-11-amazon-corretto"
export PATH="$PATH:$JAVA_HOME/bin"
export M2_HOME="/home/<user name>/apache-maven-3.6.3"
export M2="$M2_HOME/bin"
export PATH="$PATH:$M2_HOME/bin"
export MAVEN_OPTS="-Xms256m -Xmx512m"
	
- source ~/.bashrc


## How to use?
1. Clone repo
2. Command: mvn spring-boot:run  (in dir eatout_api)


## Primary path: /reservation
## Port: 8034
## Complete path: http://localhost:8034/reservation

## Manage Reservations Path: /reservation

Example **BODY** Reservation: (requiered for some queries)
```
{
	"idUser": 1,
	"idRestaurant": 1,
	"date": "2022-10-15",
	"time": "21:00",
	guests: 2
}
```

## queries with no pre requisites
GET methods: 
- todas las reservaciones: http://localhost:8034/reservation/views
- todas las reservaciones para un restaurant: http://localhost:8034/reservation/views/restaurant/{idRestaurant}
- todas las reservaciones para un usuario: http://localhost:8034/reservation/views/user/{idUser}
	
	
	

#### **REQUIRED BODY** queries:
- (ADD RESERVATION) POST: /add  
http://localhost:8034reservation/add + **body**

- (UPDATE RESERVATION) PUT: /update  
http://localhost:8034/reservation/update + **body**

#### **REQUIERED ID** queries: (val == id)
- (VIEW RESERVATION) GET (val): /views/{val}  
http://localhost:8034/reservation/views/{**val**}

- (DELETE RESERVATION) DELETE (val): /delete/{val}  
http://localhost:8034/reservation/delete/{**val**}


#

EXTRA FUNCIONALITIES (no importante)

## Manage Users Path: /user
Example **BODY** User: (requiered for some queries)
```
{
    "name": "Juan Perez",
    "phone": "099123123",
    "mail": "jpeerez@gmail.com"
}
```

## queries with no pre requisites
- (VIEW ALL USERS) GET: /views 
http://localhost:8034/user/views

### **REQUIRED BODY** queries:
- (ADD USER) POST: /add  
http://localhost:8034/user/add + **body**

- (UPDATE USER) PUT: /update  
http://localhost:8034/user/update + **body**

### **REQUIERED ID** queries: (val == id)
- (VIEW USER) GET (val): /views/{val}  
http://localhost:8034/user/views/{**val**}

- (DELETE USER) DELETE (val): /delete/{val}  
http://localhost:8034/user/delete/{**val**}



## Manage Restaurants Path /restaurant:
Example **BODY** Restaurant: (requiered for some queries)
```
{
    "name": "Don pepe",
    "location": "Punta Del Este",
    "number": "099282832",
    "description": "descripcion"
}
```

## queries with no pre requisites
- (VIEW ALL RESTAURANTS) GET: /views 
http://localhost:8034/restaurant/views

### **REQUIRED BODY** queries:
- (ADD RESTAURANT) POST: /add  
http://localhost:8034/restaurant/add + **body**

- (UPDATE RESTAURANT) PUT: /update  
http://localhost:8034/restaurant/update + **body**

### **REQUIERED ID** queries: (val == id)
- (VIEW RESTAURANT) GET (val): /views/{val}  
http://localhost:8034/restaurant/views/{**val**}

- (DELETE RESTAURANT) DELETE (val): /delete/{val}  
http://localhost:8034/restaurant/delete/{**val**} 


