import React, { Component } from 'react';
import Tilt from 'react-tilt'
import './logo.css'

const Logo = () => {

    return (

        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3"> <center><img style={{paddingTop: '25px'}} src="https://img.icons8.com/fluent/48/000000/login-rounded-right.png"/></center></div>
            </Tilt>

        </div>
    );

}

export default Logo;