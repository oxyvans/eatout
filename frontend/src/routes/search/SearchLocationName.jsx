import React, { useState , useEffect} from 'react'
import Card from '../../components/card/Card.jsx'
import * as Server from "../../server/restaurantsServer"
import { useParams } from 'react-router-dom'

const SearchLocationName = () => {
    const { name } = useParams();
    const { location } = useParams();
    console.log(name);
    console.log(location);
    const [rest, setRest] = useState([]);
    
      const listRest =  async () => {
          try{
              const res =  await Server.SearchRestaurantsWhitNameLocation(name, location);
              const data = await res.json();
              const r = data["Search"];
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

export default SearchLocationName