import React from 'react'
import "./home.css"

const Search = () => {
  return (
    <div className='home__search'>
        <div class="centered">
            <div class="group">
                <input className='input-search' id="name" type="text" required="required"/>
                <label for="name">Restaurant</label>
                <div class="bar"></div>
            </div>
        </div>
    <div class="centered">
        <div class="group">
            <input className='input-search' id="name" type="text" required="required"/>
            <label for="name">Location</label>
            <div class="bar"></div>
        </div>
    </div>
    <div className='home__button'>
      <a href="#contact" className='button-i button button--flex'>Search 
        <i class="uil uil-search button__icon"></i>
      </a>
    </div>
  </div>
  )
}

export default Search