import './App.css';
import Home from './components/home/Home';
import All from './routes/all/All';
import Map from './routes/map/Map';
import Login from './routes/login/Login';
import Signin from './routes/sign-in/Signin';

import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/all' element={<All />} />
        <Route path='/map' element={<Map />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-in' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
