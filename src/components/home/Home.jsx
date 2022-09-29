import React from 'react';
import "./home.css";
import Social from './Social';
import Search from './Search';
import Nav from "../nav/Nav"

const Home = () => {
  return (
    <section className='home section' id='home'>
      <Nav />
    <div className='home__container container grid'>
        <div className='home__content grid'>
            <Social />
            <div className='home__img'></div>
        </div>
        <Search />
    </div>
</section>
  )
}

export default Home