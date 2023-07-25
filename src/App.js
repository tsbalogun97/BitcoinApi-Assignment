import React from 'react'
import {Route, Routes} from "react-router-dom"
import Currencies from './pages/Currencies';
import Main from './pages/Main';
import Prices from './pages/Prices';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/currencies" element={<Currencies/>}/>
      <Route path="/prices/:symbol" element={<Prices/>}/>
      
    </Routes>

    </div>
  );
}

export default App;
