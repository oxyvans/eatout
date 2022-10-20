import React, { useState } from 'react'
import "./restaurantData.css"
import restaurants from "../../routes/all/test"

const RestaurantData = (props) => {
  return (
  <div>
    <h1>{props.rest.RestName}</h1>
    <img src={restaurants[props.id].img}alt="" />
    location<h3>{props.rest.location}</h3> 
    cel<h3>{props.rest.telephone}</h3> 
    desc<h3>{props.rest.descrip}</h3> 
    rankin<h3>{props.rest.rank}</h3> 
    tables<h3>{props.rest.available_tables}</h3> 
  </div>
  )
}

export default RestaurantData