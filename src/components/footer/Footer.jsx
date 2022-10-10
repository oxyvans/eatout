import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>eatOut</h1>

            <ul className='footer__list'>
                <li>
                    <a href="/map" className='footer__link'>Map</a>
                </li>
                <li>
                    <a href="/home" className='footer__link'>Home</a>
                </li>
                <li>
                    <a href="/all" className='footer__link'>All</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href="https://www.instagram.com/" className="home__social-icon" /*target={_blank}*/>
                <i class="uil uil-instagram"></i>
                </a>
                <a href="https://www.facebook.com/" className="home__social-icon" /*target={_blank}*/>
                <i class="uil uil-facebook"></i>
                </a>
                <a href="https://twitter.com/" className="home__social-icon" /*target={_blank}*/>
                <i class="uil uil-twitter-alt"></i>
                </a>
            </div>
            
            <a href="/form" className='footer__contact'>Add your restaurant</a>
            <span className='footer__copy'>
                &#169; eatOut. All rigths reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer