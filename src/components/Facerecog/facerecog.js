import React, { Component } from 'react';



const Facerecog = ({ imageUrl }) => {

    return (

        <div className='center ma' >
            <div className='absolute mt2'>

            <img id='inputimage' alt='' src= { imageUrl } width='500PX' height='AUTO' ></img>

            </div>


        </div>

    );

}

export default Facerecog;


