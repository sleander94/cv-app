import React, { Component } from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        name: '',
        email: '',
        phone: '',
        address: '',
        description: '',
      },
    };
    this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.className]: {
        ...this.state[e.target.className],
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <h1>CV - Generator</h1>
        <Form {...this.state} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
