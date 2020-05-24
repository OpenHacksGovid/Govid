import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import News from "./News";

class Nav extends React.Component {
    render() {
        return (
            <Router>
            <div >
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h1 className="mx-auto text-center"><Link to="/">goVid</Link></h1>
                </nav>
                <h5 className="text-center">All your information needs for COVID-19 and your government</h5>
                <nav className="mb-3 navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mx-auto">
                        <li className="navbar-item"><Link to="/">Home</Link></li>
                        <li className="navbar-item"><Link to="/news">News</Link></li>
                        <li className="navbar-item"><Link to="/about">About</Link></li>
                    </ul>
                </nav>

            <Route path="/" exact component={Home} />
            <Route path="/news" exact component={News} />
            <Route path="/about" component={About} />
            </div>
            </Router>
        );
    }
}

export default Nav;