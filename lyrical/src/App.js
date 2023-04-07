
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPageComponents/SearchPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SearchPage" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
