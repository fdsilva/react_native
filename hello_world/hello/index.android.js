import React, { Component } from 'react';
//import { AppRegistry, Text } from 'react-native';
import { AppRegistry, Image } from 'react-native';

class HelloWorldApp extends Component{
  render(){
    /*let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };*/
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
      //<Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('hello', () => HelloWorldApp);