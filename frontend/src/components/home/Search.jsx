import{ React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"

const Search = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    restaurant: '',
    location: ''
  })

  const handleInputChange = (event) => {
    setData({
        ...data,
        [event.target.name] : event.target.value
    })
}

  const enviarDatos = (event) => {
    event.preventDefault();
    if(data.restaurant === '' &&  data.location !== '')
        navigate(`restaurants/location/${data.location}`);
    else
      if(data.restaurant !== '' &&  data.location === '')
        {
          navigate(`/restaurants/name/${data.restaurant}`);
        }else{
          navigate(`/restaurants/name/${data.restaurant}`);
        }
  }

  return (
  <form action="" onSubmit={enviarDatos}>
      <div className='home__search'>
        <div className="centered">
          <div className="group">
              <input className='input-search' id="name" name='restaurant'  onChange={handleInputChange} type="text" ></input>
              <label for="name">Restaurant</label>
              <div className="bar"></div>
          </div>
        </div>
        <div className="centered">
          <div className="group">
            <input className='input-search' id="name" name='location' onChange={handleInputChange} type="text" ></input>
            <label for="name">Location</label>
            <div className="bar"></div>
          </div>
        </div>  
      <div className='home__button'>
        <button className='button-i button button--flex'>Search 
          <i className="uil uil-search button__icon"></i>
        </button>
      </div>
    </div>
  </form>
  )
}

export default Search