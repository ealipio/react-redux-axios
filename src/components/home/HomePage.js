import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
    return (
        <div classID="jumbotron">
            <h1>PluralSight Administration</h1>
            <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
    );
};

export default HomePage;