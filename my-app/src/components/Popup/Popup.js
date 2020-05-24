import React from 'react';
class Popup extends React.Component {
    render() {
        return (
            <div className="App" style={{background: "white"}}>
                <h1>State: {this.props.data}</h1>
            </div>
        );
    }
}
export default Popup;