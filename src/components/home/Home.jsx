import React from 'react';
import "./home.css";
import Social from './Social';
import Search from './Search';
import Top from '../top/Top';
import Scroll from './Scroll';

const Home = () => {
  return (
    <section className='home section container' id='home'>
    <div className='home__container container grid'>
        <div className='home__content grid'>
            <Social />
            <div className='home__img'></div>
        </div>
        <Search />
        <Scroll />
    </div>
    <Top />
</section>
  )
}

export default Home