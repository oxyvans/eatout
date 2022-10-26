import React, {useState} from 'react'
import "./reservationForm.css"
import * as Server from "../../server/restaurantsServer"

const ReservationForm = (props) => {
  const [param, setParam] = useState({
    name: '',
    mail: '',
    tel: ''
  })

  const [body, setBody] = useState({
    idRestaurant: props.id,
    idUser: null,
    time: '',
    date: '',
    guests: ''
  })

  const handleInputChange = (event) => {
    setBody({
        ...body,
        [event.target.name] : event.target.value
    })
}
  const handleInputChangeP = (event) => {
    setParam({
      ...param,
      [event.target.name] : event.target.value
  })
}

const enviarDatos = (event) => {
  event.preventDefault();
    console.log(body);
    console.log(param);
    Server.Reservation(param , body);   
}
  return (

    <>
    <div className="conteiner">
    <h2 className='section__title'>Reserve now</h2>
      <span className='section__subtitle'>When the restaurant confirms your reservation, we will send you an email</span>
        <form className='cont_form' action="" onSubmit={enviarDatos}>
            <div className='form-div'>
                <label className='form-tag'> Name</label>
                <input type="text"  name='name' onChange={handleInputChangeP} 
                    className='form-input'  
                    placeholder='Insert your Name'
                    required/>
            </div>

            <div className='form-div'>
                <label className='form-tag'>Email</label>
                <input type="email" name='mail' onChange={handleInputChangeP}
                    className='form-input'  
                    placeholder='Insert your Email'
                    required/>
            </div>
            <div className='form-div'>
                <label className='form-tag'>Telephone</label>
                <input type="text" name='tel' onChange={handleInputChangeP}
                    className='form-input'  
                    placeholder='Insert your Telephone'
                    required/>
            </div>
            <div className='form-div'>
                <label className='form-tag'>Day</label>
                <input type="date" name='date' onChange={handleInputChangeP}
                    className='form-input'
                    required/>
            </div>
            <div className='form-div'>
                <label className='form-tag'>Time</label>
                <input  type="time" name='time' onChange={handleInputChangeP}
                    className='form-input'
                    required/>
            </div>
            <div className='form-div'>
                <label className='form-tag'>Guests</label>
                <input type="number" name='guests' onChange={handleInputChangeP}
                    className='form-input'  
                    placeholder='Insert Number of guests'
                    required/>
            </div>
            <div className="button-l">  
            <button className='button button--flex'>
                Reserve <i class="uil uil-calender icno-r"></i>
            </button>
            </div>
        </form>
    </div>

    {/*
    <div className='reserv' id='reserv'>
      <h2 className='section__title'>Reserve now</h2>
      <span className='section__subtitle'>When the restaurant confirms your reservation, we will send you an email</span>
      <form action="" onSubmit={enviarDatos}>
        <input type="text"  name='name' placeholder='nombre' onChange={handleInputChangeP}/>
        <input type="email" name='mail' placeholder='emali' onChange={handleInputChangeP}/>
        <input type="text" name='tel'  placeholder='cel' onChange={handleInputChangeP}/>
        <input type="date" name='date'  placeholder='fecha' onChange={handleInputChange}/>
        <input type="time" name='time'  placeholder='hora' onChange={handleInputChange}/>
        <input type="number" name='guests'  placeholder='personas' onChange={handleInputChange}/>

        <button className='button_small'> Reserv</button>
      </form>
  
    </div>
    */}
    </>
  )
}

export default ReservationForm