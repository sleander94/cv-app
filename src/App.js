import React from 'react';
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
      education: [],
    };

    this.handleInputChange.bind(this);
    this.addToArray.bind(this);
    this.removeJob.bind(this);
    this.removeSchool.bind(this);
  }

  handleInputChange = (type) => (e) => {
    if (type === 'personal') {
      this.setState({
        [e.target.className]: {
          ...this.state[e.target.className],
          [e.target.name]: e.target.value,
        },
      });
    } else if (type === 'work') {
      let work = [...this.state.work];
      let job = { ...work[e.target.className] };
      job[e.target.name] = e.target.value;
      work[e.target.className] = job;
      this.setState({ work });
    } else if (type === 'education') {
      let education = [...this.state.education];
      let school = { ...education[e.target.className] };
      school[e.target.name] = e.target.value;
      education[e.target.className] = school;
      this.setState({ education });
    }
  };

  addToArray = (item, array) => {
    if (item === 'job') {
      item = {
        company: '',
        title: '',
        start: '',
        end: '',
        description: '',
      };
    } else if (item === 'school') {
      item = {
        course: '',
        school: '',
        start: '',
        end: '',
        description: '',
      };
    }
    this.setState({
      [array]: [...this.state[array], item],
    });
  };

  removeJob = (n) => {
    this.setState({
      work: this.state.work.filter((job) => {
        return job !== this.state.work[n];
      }),
    });
  };

  addSchool = () => {
    let school = {
      course: '',
      school: '',
      start: '',
      end: '',
      description: '',
    };
    this.setState({
      education: [...this.state.education, school],
    });
  };

  removeSchool = (n) => {
    this.setState({
      education: this.state.education.filter((school) => {
        return school !== this.state.education[n];
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>CV - Generator</h1>
        <Form
          {...this.state}
          handleInputChange={this.handleInputChange}
          addToArray={this.addToArray}
          removeJob={this.removeJob}
          removeSchool={this.removeSchool}
        />
        <CV {...this.state} />
      </div>
    );
  }
}

export default App;
