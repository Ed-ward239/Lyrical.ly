import React from 'react';


import { Routes, Route } from 'react-router-dom';

import Home from './components/HomePage';
import About from './components/MenuPages/About';
import Guide from './components/MenuPages/Guide';
import Privacy from './components/MenuPages/Privacy';
import TnS from './components/MenuPages/TnS';
import CntSpotify from './components/MenuPages/connectSpotify';
import SearchPage from './components/SearchPageComponents/SearchPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
const code = new URLSearchParams(window.location.search).get('code')
function App() {
 
    return (
      code ? <Dashboard code = {code}/> : <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Guide" element={<Guide/>}/>
            <Route path="/Privacy" element={<Privacy/>}/>
            <Route path="/TnS" element={<TnS/>}/>
            <Route path="/connectSpotify" element={<CntSpotify/>}/>
            <Route path="/SearchPage" element={<SearchPage />} />
        </Routes>
      </div>
       
    
    )
}

export default App;
