import React, { Component } from 'react';
import Form from './components/Form';
import CV from './components/CV';
import './styles/App.css';

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
      work: [],
    };

    this.handlePersonalChange.bind(this);
    this.handleJobChange.bind(this);
    this.addJob.bind(this);
    this.removeJob.bind(this);
  }

  handlePersonalChange = (e) => {
    this.setState({
      [e.target.className]: {
        ...this.state[e.target.className],
        [e.target.name]: e.target.value,
      },
    });
  };

  addJob = () => {
    let job = {
      company: '',
      title: '',
      start: '',
      end: '',
      description: '',
    };
    this.setState({
      work: [...this.state.work, job],
    });
  };

  removeJob = (n) => {
    this.setState({
      work: this.state.work.filter((job) => {
        return job !== this.state.work[n];
      }),
    });
  };

  handleJobChange = (e) => {
    let work = [...this.state.work];
    let job = { ...work[e.target.className] };
    job[e.target.name] = e.target.value;
    work[e.target.className] = job;
    this.setState({ work });
  };

  render() {
    return (
      <div className="App">
        <h1>CV - Generator</h1>
        <Form
          {...this.state}
          handleJobChange={this.handleJobChange}
          handlePersonalChange={this.handlePersonalChange}
          addJob={this.addJob}
          removeJob={this.removeJob}
        />
        <CV {...this.state} />
      </div>
    );
  }
}

export default App;
