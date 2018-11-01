import React, { Component } from 'react';

import './App.css';
import Counter from './Counter';
import PostsList from './PostsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hey Hooks!</h1>
        <Counter/>
        <PostsList/>
      </div>
    );
  }
}

export default App;
