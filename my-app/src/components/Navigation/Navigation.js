import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import '../../App.css';

import Home from "./Home";
import About from "./About";
import News from "./News";

class Nav extends React.Component {
    render() {
        return (
            <Router>
            <div >
                <nav className="navbar navbar-expand-lg navbar-light">
                    <h1 className="mx-auto text-center"><Link to="/">goVid</Link></h1>
                </nav>
                <h5 className="mb-0 text-center">All your information needs for COVID-19 and your government</h5>
                <nav className="mb-3 navbar nav-tabs navbar-expand-lg navbar-light">
                    <ul className="navbar-nav mx-auto">
                        <li ref="home-link"><Link className="nav-link active"to="/">Home</Link></li>
                        <li ref="news-link"><Link className="nav-link" to="/news">News</Link></li>
                        <li ref="about-link"><Link className="nav-link" to="/about">About</Link></li>
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