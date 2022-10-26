import React, { useState } from 'react'
import "./restaurantData.css"
import restaurants from "../../routes/all/test"

const RestaurantData = (props) => {
  return (
  <div className='continer'>
     <h2 className='section__title'>{props.rest.restName}</h2>
      <span className='section__subtitle'>Ranking {props.rest.rank}/10 <i class="uil uil-trophy"></i></span>
      <img className='img img_rest' src={restaurants[props.id].img} alt="" />
      <div className='cont_desc'>
        <div className='cont_descrip-items'>
          <h3>Description</h3>
          {props.rest.descrip}
        </div>
        <div className='cont_descrip-items' >
          <i class="uil uil-location-pin-alt icon-card"></i>
          {props.rest.location}
        </div>
        <div className='cont_descrip-items'>
          <i class="uil uil-phone icon-card"></i>
          {props.rest.telephone}
        </div>
      </div>
  </div>
  )
}

export default RestaurantData