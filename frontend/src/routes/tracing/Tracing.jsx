import React, {useState , useEffect} from 'react';
import * as Server from "../../server/restaurantsServer";

const Tracing = () => {
  const [data, setData] = useState({
    id: ''
  })
  const [r, setRest] = useState([]);

  const listRest =  async (id) => {
    try{
        const res =  await Server.ReservationWhitId(id);
        const r = await res.json();
        setRest(r);
        console.log(r);
    }catch (error){
        console.log(error);
    }
};

  const handleInputChange = (event) => {
    setData({
        ...data,
        [event.target.name] : event.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    listRest(data.id);
  }
  return (
    <div className='section container'>
    <h2 className='section__title'>Track your booking</h2>
      <span className='section__subtitle'>Enter your booking ID for your status</span>
      <div className='cont_conteiner container'>
      <form className='cont_form' action="" onSubmit={enviarDatos}>
            <div className='form-div'>
                <label className='form-tag'>booking ID</label>
                <input type="number"  name='id' onChange={handleInputChange} 
                    className='form-input'  
                    placeholder='Insert your Id'
                    required/>
            </div>
            <div className="button-l">  
            <button className='button button--flex'>
              View Status<i class="uil uil-eye icno-r"></i>
            </button>
            </div>
        </form>
        </div>
        {r.status}
    </div>
  )
}

export default Tracing 