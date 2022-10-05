import React from 'react'
import "./restaurant.css"
import Nav from '../../components/nav/Nav'
import restaurants from "../all/test"
import Card from "../../components/card/Card"

import { useParams } from 'react-router-dom'


const Restaurant = () => {
  const { id } = useParams()

  const elem = restaurants[id]

  return (
    <div className=' container '>
      <Nav />
      <div className='section'>
        <Card elem={elem}/>
      </div>
    </div>
  )
}

export default Restaurant