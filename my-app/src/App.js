import React from 'react';
import './App.css';

import Map from './components/Body/App'
import Header from "./components/Header/App";

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
