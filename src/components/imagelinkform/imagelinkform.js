import React, { Component } from 'react';


const Imagelinkform = ({ onInputChange, Onsubmit }) => {

    return (

   <div>
       <p className='f3 center'>
            {'This Magic App will detect faces in your pictures. Try it'}
       </p>

       <div className='center'>
           <div className='pa4 br3 shadow-2 center bg-black'>
           <input type="tex" onChange={ onInputChange } />
           <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple center' onClick={Onsubmit}> Detect </button>
           </div>
       </div>

   </div>


    );

}

export default Imagelinkform;


