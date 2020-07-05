import React, { Component } from 'react';
import './App.css';
import * as styles from './styles'
import Container from './containers/Container';

class App extends Component {

  render() {
  
    return (
      <Container />
    );
  }
}
 
const AppInstance = new App()

console.log(AppInstance)

export default App;
