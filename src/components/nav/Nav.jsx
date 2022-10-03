import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className='header'>
        <nav className="nav container">

            <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="/map" className="nav__link">
                           Map
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="/" className=" nav__link active-link" >
                            Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="/all" className="nav__link" >
                            All
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close"></i>
            </div>
            <div className='nav__toggle'>
                <i class="uil uil-bars"></i>
            </div>
            <div className='nav__button'>
            <a href="/sign-in">
            <div className='button button-n'>
               Sign in
            </div>
            </a>
            <a href="/login">
            <div className='button button-n'>
                Login
                <i class="uil uil-sign-in-alt nav-icon"></i>
            </div>
            </a>
        </div>
       </nav>
    </header>
  )
}

export default Nav