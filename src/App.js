import React, { Component } from 'react';
import './App.css';
import * as styles from './styles'

class App extends Component {

  render() {
  
    return (
      <div className="App">
        <div style={styles.styles}>
          Styles
        </div>
        <button>Button 1</button>
        React
      </div>
    );
  }
}
 
const AppInstance = new App()

console.log(AppInstance)

export default App;
