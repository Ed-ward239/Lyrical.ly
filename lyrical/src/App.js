import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/MenuPages/About';
import Guide from './components/MenuPages/Guide';
import Privacy from './components/MenuPages/Privacy';
import TnS from './components/MenuPages/TnS';
import CntSpotify from './components/MenuPages/connectSpotify';
//import SearchPage from './components/SearchPageComponents/SearchPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Guide' element={<Guide/>} />
        <Route path='/Privacy' element={<Privacy/>} />
        <Route path='/TnS' element={<TnS/>} />
        <Route path='/connectSpotify' element={<CntSpotify/>} />
      </Routes>
    </div>
  );
}

export default App;