import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from "./Home";
import About from "./About";

class Nav extends React.Component {
    render() {
        return (
            <Router>
            <div >
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h1 className="mr-auto"><Link to="/">goVid</Link></h1>
                    <ul className="navbar-nav ml">
                        <li className="navbar-item"><Link to="/">Home</Link></li>
                        <li className="navbar-item"><Link to="/about">About</Link></li>
                    </ul>
                </nav>

            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            </div>
            </Router>
        );
    }
}

export default Nav;