import './App.css';
import Home from './components/home/Home';
import All from './routes/all/All';
import Map from './routes/map/Map';
import Login from './routes/login/Login';
import Signup from './routes/sign-up/Signup';
import Restaurant from './routes/restaurant/Restaurant';
import Nav from './components/nav/Nav';
import Location from './routes/location/Location';
import Name from './routes/name/Name';

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
        <Route path='restaurants/name/:name' element={<Name />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
