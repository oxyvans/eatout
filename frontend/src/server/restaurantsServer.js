const API_URL= 'http://35.247.214.17:8000/api/restaurants/'

export const listRestaurants =  async () => {
    return await fetch(API_URL);
};

export const listRestaurantsWhitId =  async (id) => {
    return await fetch(API_URL + id);
    
};

export const topRestaurants =  async () => {
    return await fetch(API_URL + "top");
};

export const SearchRestaurantsWhitName =  async (name) => {
    return await fetch(API_URL + "name/" + name);
};

export const SearchRestaurantsWhitLocation =  async (location) => {
    return await fetch(API_URL + "location/" + location);
};

export const SearchRestaurantsWhitNameLocation =  async (name, location) => {
    return await fetch(API_URL + "search/" + location + "/" + name);
};

const API_URL_2= 'http://35.247.214.17:8034/reservation/addNoUser'

export const Reservation =  async (param , body) => {
    var url = new URL(API_URL_2)
    for (let k in param) {url.searchParams.append(k, param[k]); }
    console.log(url);
   return await fetch(url, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    method: "POST",
    body: JSON.stringify(body)
   });
};

const API_URL_3 = "http://35.247.214.17:8034/reservation/views/";

export const ReservationWhitId =  async (id) => {
    return await fetch(API_URL_3 + id);
};