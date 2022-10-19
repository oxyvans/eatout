import './App.css';
import Home from './components/home/Home';
import All from './routes/all/All';
import Map from './routes/map/Map';
import Login from './routes/login/Login';
import Signup from './routes/sign-up/Signup';
import Restaurant from './routes/restaurant/Restaurant';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer'
import Location from './routes/location/Location';

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
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/restaurant/:id' element={<Restaurant />} />
        <Route path='restaurants/location/:location' element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
