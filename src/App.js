import React, { Component } from 'react'

import Routes from './routes'

class App extends Component {
  render() {
    return (
      // App uses 'routes' module to determine which one page will be shown
      <div className="App">
        <Routes/>
      </div>
    );
  }
}

export default App;
