import React, { Component } from 'react';

import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hey Hooks!</h1>
        <Counter/>
      </div>
    );
  }
}

export default App;
