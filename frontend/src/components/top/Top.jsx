import React, { useState , useEffect} from 'react'
import "./top.css"
import Card from "../card/Card"
import * as Server from "../../server/restaurantsServer"

const Top = () => {

  const [rest, setRest] = useState([]);

  const listRest =  async () => {
      try{
          const res =  await Server.topRestaurants();
          const data = await res.json();
          const r = data["TopRestaurants"];
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
    <section className='top section' id='top'>
        <h3 className='section__title'>Top Restaurants</h3>
        <samp className='section__subtitle'>The best for you</samp>
        <div className='top_cont grid'>
        {rest.map((elem) => {
                  return (
                      <Card  elem={elem}/>
                  )
              })}
        </div>
    </section>
  )
}

export default Top