import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from "./Home";
import About from "./About";

class Nav extends React.Component {
    render() {
        return (
            <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            </div>
            </Router>
        );
    }
}

export default Nav;