import React from 'react';
import './App.css';



import Body from './components/Body/Body';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
function App() {

    return (
        <div className="App">
            <div>
                <Navigation />
                <Header />
                <Body />
            </div>
        </div>
    );
  return (
    <div className="App">
     <div>
        <Header/>
        <Map/>
        <Navigation />
        <Header />
        <Body />
     </div>
    </div>
  );
}
export default App;