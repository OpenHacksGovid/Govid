import React, { useState } from 'react';

function Popup() {
    const [setIsShown] = useState(false);

    return (
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
