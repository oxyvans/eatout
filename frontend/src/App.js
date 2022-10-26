import './App.css';
import Home from './components/home/Home';
import All from './routes/all/All';
import Tracing  from './routes/tracing/Tracing';
import Login from './routes/login/Login';
import Signup from './routes/sign-up/Signup';
import Restaurant from './routes/restaurant/Restaurant';
import Nav from './components/nav/Nav';
import Location from './routes/location/Location';
import Name from './routes/name/Name';

import { BrowserRouter, Route, Routes} from "react-router-dom";
import SearchLocationName from './routes/search/SearchLocationName';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' exactly element={<Home />} />
        <Route path='/all' element={<All />} />
        <Route path='/tracing' element={<Tracing  />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/restaurant/:id' element={<Restaurant />} />
        <Route path='restaurants/location/:location' element={<Location />} />
        <Route path='restaurants/name/:name' element={<Name />} />
        <Route path='search/:location/:name' element={<SearchLocationName />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
