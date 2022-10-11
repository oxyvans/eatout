import React from 'react'
import "./top.css"
import restaurants from "../../routes/all/test"
import Card from "../card/Card"

const Top = () => {
  return (
    <section className='top section' id='top'>
        <h3 className='section__title'>Top Restaurants</h3>
        <samp className='section__subtitle'>The best for you</samp>
        <div className='top_cont grid'>
        {restaurants.map((elem) => {
                  return (
                      <Card  elem={elem}/>
                  )
              })}
        </div>
    </section>
  )
}

export default Top