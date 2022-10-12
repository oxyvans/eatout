import React from 'react'
import "./restaurant.css"
import Nav from '../../components/nav/Nav'
import restaurants from "../all/test"
import RestaurantData from '../../components/reservation/RestaurantData'
import ReservationForm from '../../components/reservation/ReservationForm'

import { useParams } from 'react-router-dom'


const Restaurant = () => {
  const { id } = useParams()

  const elem = restaurants[id]

  return (
    <section className='restaurant container' id='res'>
    <Nav />
    <div className='res__container grid'>
      <RestaurantData  elem={elem} />
      <ReservationForm elem={elem} />
    </div>
    </section>
  )
}

export default Restaurant