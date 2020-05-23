import React from 'react';
import './App.css';

import Map from './components/Body/Body';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
     <div>
        <Navigation/>
        <Header/>
        <Map/>
     </div>
    </div>
  );
}

export default App;
