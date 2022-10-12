import React from 'react'
import "./home.css"

const Search = () => {
  return (
    <div className='home__search'>
        <div className="centered">
            <div className="group">
                <input className='input-search' id="name" type="text" required="required"></input>
                <label for="name">Restaurant</label>
                <div className="bar"></div>
            </div>
        </div>
    <div className="centered">
        <div className="group">
            <input className='input-search' id="name" type="text" required="required"></input>
            <label for="name">Location</label>
            <div className="bar"></div>
        </div>
    </div>
    <div className='home__button'>
      <a href="#contact" className='button-i button button--flex'>Search 
        <i className="uil uil-search button__icon"></i>
      </a>
    </div>
  </div>
  )
}

export default Search