import React from 'react'
import "./restaurantData.css"

const RestaurantData = (props) => {
  return (
      <div className='rest'>
          <div className='rest_cont'>
              <img src={props.elem.img}  className="rest_img" alt="" />
              <h1 className='rest__title'>{props.elem.name}</h1>

              <div className='rest__subtitle'>
                    {props.elem.location} <a href=""> See Map!</a>
             </div>
              <div className='rest_desc'>
                  {props.elem.des}
              </div>

              <div className='rest_tel'>
                  {props.elem.tel}
              </div>
          </div>
      </div>
  )
}

export default RestaurantData