import React from 'react'
import "./card.css"

import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='card' key={props.elem.id}>
    <img  className='img img_card' src={props.elem.img} alt="" />
    <div className='cont_des'>
    <h1 className='title'>{props.elem.name}</h1>
        <div>
            <i class="uil uil-comment-alt-info icon-card"></i>
            <spam className="info-card">{props.elem.des}</spam>
        </div>
        <div>
            <i class="uil uil-phone icon-card"></i>
            <spam className="info-card">{props.elem.tel}</spam>
        </div>
        <div>
            <i class="uil uil-location-pin-alt icon-card"></i>
            <spam className="info-card">{props.elem.location}</spam>
        </div>
    </div>
    <div className='button_cont'>
        <div className='score'>
            <span className='score-num'>{props.elem.rank}</span>
            <i class="uil uil-star"></i><i class="uil uil-star"></i><i class="uil uil-star"></i><i class="uil uil-star"></i><i class="uil uil-star-half-alt"></i>
        </div>
    <Link to={`/restaurant/${props.elem.id}`}>
        <div className='button_card button_small'>
            Reserve <i class="uil uil-calender"></i>
        </div>
    </Link>
    </div>
</div>
  )
}

export default Card