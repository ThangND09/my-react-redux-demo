import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {

    const { Component } = props;

    const style = {
        display: 'inline-block',
        margin: 10,
        textAlign: "center"
    };

    return(
        <div >
            <nav class="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                    <div >
                        <h3 style={style}><Link to="/">Home</Link></h3>
                        <h3 style={style}>|</h3>
                        <h3 style={style}><Link to="/jokes">Jokes</Link></h3>
                    </div>
            </nav>
            <Component/>
        </div>
    )
}

export default Header;