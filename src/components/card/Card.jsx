import React from 'react'
import "./card.css"

const Card = (props) => {
  return (
    <div className='card' key={props.elem.id}>
    <h1 className='title'>{props.elem.name}</h1>
    <div>
    <i class="uil uil-star"></i><i class="uil uil-star"></i><i class="uil uil-star"></i><i class="uil uil-star"></i><i class="uil uil-star"></i>
    </div>
    <div className='cont_img'>
        <img  className='img' src={props.elem.img} alt="" />
    </div>
    <div className='cont_des'>
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
    <div className='button_card button'>
        Reserve <i class="uil uil-calender"></i>
    </div>
    </div>
</div>
  )
}

export default Card