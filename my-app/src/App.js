import React from 'react';
import './App.css';

import Map from './components/Body/Body'
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
     <div>
         <Header/>
         <Map/>
     </div>
    </div>
  );
}

export default App;
