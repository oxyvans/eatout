import React, { useState , useEffect} from 'react'
import Card from '../../components/card/Card.jsx'
import "./all.css"
import * as Server from "../../server/restaurantsServer"

const All = () => {

  const [rest, setRest] = useState([]);

  const listRest =  async () => {
      try{
          const res =  await Server.listRestaurants();
          const data = await res.json();
          const r = data["restaurants"];
          setRest(r);
          console.log(r);
      }catch (error){
          console.log(error);
      }
  };

  useEffect(() => {
    listRest();
  }, []);

  return (
    <div className='container'>
    <section className='All container section grid' id='all'>
        <h2 className='section__title'>All Restaurants</h2>
        <samp className='section__subtitle'>look for your place</samp>
        <div className='all__container grid'>
        {rest.map((elem) => {
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