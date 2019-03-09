import React, { Component } from 'react'

import MainMenu from './components/MainMenu'
import ControlMenu from './components/ControlMenu'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ControlMenu/>
        <Footer/>
      </div>
    );
  }
}

export default App;
