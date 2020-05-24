<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 6edb4e380434a8071523342ba1eb9059a22be7a9

function Popup() {
    const [setIsShown] = useState(false);

    return (
<<<<<<< HEAD
        <div className="App">
            <button
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                Hover over me!
            </button>
        </div>
    );
}

export default Popup;
=======
        <div className="App" style={{background: "white"}}>
            <h1>Popup text</h1>
        </div>
    );
}
export default Popup;
>>>>>>> 6edb4e380434a8071523342ba1eb9059a22be7a9
