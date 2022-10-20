import React, { useState, useEffect } from 'react'
import "./restaurant.css"
import Nav from '../../components/nav/Nav'
import RestaurantData from '../../components/reservation/RestaurantData'
import ReservationForm from '../../components/reservation/ReservationForm'

import { useParams } from 'react-router-dom'
import * as Server from "../../server/restaurantsServer"


const Restaurant = () => {
  const { id } = useParams()
  const [rest, setRest] = useState([]);

  const listRest =  async () => {
      try{
          const res =  await Server.listRestaurantsWhitId(id);
          const data = await res.json();
          const r = data["restaurants"];
          setRest(r);
          console.log(r);
      }catch (error){
          console.log(error);
      }
  };

  useEffect(() => {
    listRest();
  }, []);

  return (
    <section className='restaurant container' id={id}>
    <Nav />
    <div className='res__container grid'>
      <RestaurantData  rest={rest} id={id}/>
      <ReservationForm rest={rest} id={id}/>
    </div>
    </section>
  )
}

export default Restaurant