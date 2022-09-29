import React from 'react'
import "./nav.css"

const Nav = () => {
  return (
    <header className='header'>
        <nav className="nav container">

            <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#Map" className="nav__link">
                           Map
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#Home" className=" nav__link active-link" >
                            Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#All" className="nav__link" >
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
            <div className='button button-n'>
                Sign in
            </div>
            <div className='button button-n'>
                Login
                <i class="uil uil-sign-in-alt nav-icon"></i>
            </div>
        </div>
       </nav>
    </header>
  )
}

export default Nav