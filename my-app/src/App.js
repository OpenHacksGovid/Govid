import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

//import Body from './components/Body/Body';
import Header from "./components/Header/Header";
//import Navigation from "./components/Navigation/Navigation";
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="container">
            <div>
                <Header />
                <Footer />
            </div>
        </div>
    );
}
export default App;