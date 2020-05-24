import React from 'react';
import Map from "../Map/Map";

function Home() {
    return (
        <div className="Home">
            <div>
                <Map />
                <h5 className="pt-3 text-center">
                    Usage
                </h5>
                <p>
                    Click on the different states to bring up a popup with information on your governer's Twitter and your representative's contact information. The colors indicate different levels of coronavirus cases: dark orange is the highest at over 40,000 cases, light orange is between 10,000 and 40,000 cases, and finally yellow if less than 10,000 cases.
                </p>
            </div>
        </div>
    );
}
export default Home;