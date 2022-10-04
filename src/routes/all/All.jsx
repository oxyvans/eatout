import React, { useState } from 'react'
import restaurants from "./test.jsx"
import Nav from "../../components/nav/Nav"
import Card from '../../components/card/Card.jsx'
import "./all.css"

const All = () => {
  const [item, setItem] = useState(restaurants);

  return (
    <div className='container'>
    <Nav />
    <section className='All container section grid' id='all'>
        <h2 className='section__title'>All Restaurants</h2>
        <samp className='section__subtitle'>look for your place</samp>
        <div className='all__container grid'>
        {item.map((elem) => {
                  const {id, img, name, tel, des, location} = elem;
                  return (
                      <Card  elem={elem}/>
                  )
              })}
        </div>
    </section>
    </div>
  )
}

export default All