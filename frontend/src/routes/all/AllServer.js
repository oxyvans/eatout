const API_URL= 'http://127.0.0.1:8000/api/restaurants/'

export const listRestaurants =  async () => {
    return await fetch(API_URL);
};