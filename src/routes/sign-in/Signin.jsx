import React from 'react'
import "./signin.css"

const Signin = () => {
  return (
    <section className='cont container section' id='contact'>
      <div className="button-h"><a href="/">
            <button className=' button button--flex'>Back</button>
            </a>
      </div>
    <h2 className='section__title'>Sign in</h2>
    <div className="cont_conteiner container">
        <form className='cont_form'>
            <div className='form-div'>
                <label className='form-tag'> Username</label>
                <input type="text" 
                    name='name' 
                    className='form-input'  
                    placeholder='Insert your Username'/>
            </div>

            <div className='form-div'>
                <label className='form-tag'>Email</label>
                <input type="email" 
                    name='email' 
                    className='form-input'  
                    placeholder='Insert your Email'/>
            </div>
            <div className='form-div'>
                <label className='form-tag'>Telephone</label>
                <input type="number" 
                    name='tel' 
                    className='form-input'  
                    placeholder='Insert your Telephone'/>
            </div>
            <div className='form-div'>
                <label className='form-tag'>Password</label>
                <input type="password" 
                    name='pas' 
                    className='form-input'  
                    placeholder='Insert your Password'/>
            </div>
            <div className="button-l">  
            <button className=' button button--flex'>Sign in
            <i class="uil uil-sign-in-alt nav-icon"></i>
            </button>
            </div>
        </form>
    </div>
    </section>
  )
}

export default Signin