import {React , useState} from 'react'
import "./card.css"
import restaurants from "../../routes/all/test"

import { Link } from 'react-router-dom'

const Card = (props) => {
    const [id, setId] = useState(props.elem.id);
    const img = restaurants[id].img;

  return (
    <div className='card' key={id}>
    <img  className='img img_card' src={img} alt="" />
    <div className='cont_des'>
    <h1 className='title'>{props.elem.restName}</h1>
        <div>
            <i class="uil uil-comment-alt-info icon-card"></i>
            <spam className="info-card">{props.elem.descrip}</spam>
        </div>
        <div>
            <i class="uil uil-phone icon-card"></i>
            <spam className="info-card">{props.elem.telephone}</spam>
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