import{ React, useState } from 'react'
import "./home.css"

const Search = () => {

  const [data, setData] = useState({
    restaurant: '',
    location: ''
  })

  const handleInputChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    setData({
        ...data,
        [event.target.name] : event.target.value
    })
}

  const enviarDatos = (event) => {
    event.preventDefault()
    console.log('enviando datos...' + data.restaurant + ' ' + data.location)
  }

  return (
  <form action="" onSubmit={enviarDatos}>
      <div className='home__search'>
        <div className="centered">
          <div className="group">
              <input className='input-search' id="name" name='restaurant'  onChange={handleInputChange} type="text" required="required"></input>
              <label for="name">Restaurant</label>
              <div className="bar"></div>
          </div>
        </div>
        <div className="centered">
          <div className="group">
            <input className='input-search' id="name" name='location' onChange={handleInputChange} type="text" required="required"></input>
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