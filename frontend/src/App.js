import './App.css';
import Home from './components/home/Home';
import All from './routes/all/All';
import Map from './routes/map/Map';
import Login from './routes/login/Login';
import Signin from './routes/sign-in/Signin';
import Restaurant from './routes/restaurant/Restaurant';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer'

import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' exactly element={<Home />} />
        <Route path='/all' element={<All />} />
        <Route path='/map' element={<Map />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/restaurant/:id' element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
