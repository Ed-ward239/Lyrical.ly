import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/HomePage';
import About from './components/MenuPages/About';
import Guide from './components/MenuPages/Guide';
import Privacy from './components/MenuPages/Privacy';
import TnS from './components/MenuPages/TnS';
import CntSpotify from './components/MenuPages/connectSpotify';

const Main = () => {
    return (
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={<Home/>}/>
            <Route exact path='/About' component={<About/>}/>
            <Route exact path='/Guide' component={<Guide/>}/>
            <Route exact path='/Privacy' component={<Privacy/>}/>
            <Route exact path='/TnS' component={<TnS/>}/>
            <Route exact path='/connectSpotify' component={<CntSpotify/>}/>
        </Routes>
    );
}

export default Main;