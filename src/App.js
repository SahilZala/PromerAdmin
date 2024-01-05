
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashbord from './View/Dashbord/dashbord-view';

import React from 'react';

class App extends React.Component {
  
  render(){
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" index element={<Dashbord />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
