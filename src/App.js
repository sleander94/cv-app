import React, { Component } from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>CV - Generator</h1>
        <Form {...this.state} />
      </div>
    );
  }
}

export default App;
