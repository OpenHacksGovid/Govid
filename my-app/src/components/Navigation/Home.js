import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//import Body from './components/Body/Body';
//import Navigation from "./components/Navigation/Navigation";
import Map from "../Map/Map";

function Home() {
    return (
        <div className="Home">
            <div>
                <p>this is the home page</p>
                <Map />
            </div>
        </div>
    );
}
export default Home;