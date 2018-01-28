import React, { Component } from 'react';
import { render } from 'react-dom';
import Text from './components/testComponent';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello Node with React and Express!! </h1>
        <Text/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));