import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <section className='cont container section' id='contact'>
      <div className="button-h">  
            <button className=' button button--flex'>Back</button>
      </div>
    <h2 className='section__title'>Login</h2>
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
                <label className='form-tag'>Password</label>
                <input type="password" 
                    name='pas' 
                    className='form-input'  
                    placeholder='Insert your Password'/>
            </div>
            <div className="button-l">  
            <button className=' button button--flex'>Login
            <i class="uil uil-sign-in-alt nav-icon"></i>
            </button>
            </div>
        </form>
    </div>
    </section>
  )
}

export default Login