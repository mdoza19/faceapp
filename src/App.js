import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm  from './components/imagelinkform/imagelinkform';
import Rank  from './components/Rank/rank';
import Facerecog  from './components/Facerecog/facerecog';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({ apiKey: '562ca3c756484023a7b2e110ea79c897' });



const particlesoptions ={

  particles: {
    number:{
      value: 30,
      density:{
        enable: true,
        value_area: 800,
      }

    }
    
}

}

class Faceapp extends Component {


constructor(){

  super();
  this.state = {
    input: '',
    imageUrl: '',
    box: {},
  }
}

calculateBox = (data) => {
 const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
 const image = document.getElementById('inputimage');
 const width = Number(image.width);
 const height = Number(image.height);
 console.log(width,height)

}


onInputChange = (event) => {

  this.setState( {input: event.target.value});

}

Onsubmit = () => {

  this.setState({imageUrl: this.state.input});

  app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
  
  .then(response => this.calculateBox(response))
  .catch(error => console.log(error));
}



  render() {

return (

  <div className="Face"> 
 
 <Particles className='particles' params={particlesoptions} />
      

  <Navigation />

   <Rank/> 

  <Logo />

  <ImageLinkForm onInputChange={this.onInputChange} Onsubmit={this.Onsubmit} />


  <Facerecog imageUrl={this.state.imageUrl}  /> 
  </div>



)

  }


}


export default Faceapp;
