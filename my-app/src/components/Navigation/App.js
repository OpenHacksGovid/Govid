import React from 'react';
import { Link, Router } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <Router>
            <div className="container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            </div>
            </Router>
        );
    }
}

export default Nav;