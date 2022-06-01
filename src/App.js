import React from 'react';
import Form from './components/Form';
import CV from './components/CV';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: [
        {
          name: 'John Smith',
          email: 'johnsmith@email.com',
          phone: '(555)555-5555',
          address: 'City, ST',
          description: 'Professional Title',
        },
      ],
      work: [
        {
          title: 'Software Developer',
          company: 'Awesome Company',
          start: '2018',
          end: 'Present',
          description: 'Responsibilities and accomplishments.',
        },
      ],
      education: [
        {
          course: 'Fullstack Javascript',
          school: 'The Odin Project',
          start: '2021',
          end: '2022',
          description: 'Course description.',
        },
      ],
    };

    this.handleInputChange.bind(this);
    this.addToArray.bind(this);
    this.removeItem.bind(this);
  }

  handleInputChange = (type) => (e) => {
    let category = [...this.state[type]];
    let key = { ...category[e.target.dataset.index] };
    key[e.target.name] = e.target.value;
    category[e.target.dataset.index] = key;
    this.setState({ [type]: category });
  };

  addToArray = (item, array) => {
    let obj = {
      start: 'Year',
      end: 'Year',
      description: 'Details and accomplishments.',
    };
    if (item === 'school') {
      obj.course = 'Course';
      obj.school = 'School';
    } else if (item === 'job') {
      obj.company = 'Company';
      obj.title = 'Job Title';
    }
    this.setState({
      [array]: [...this.state[array], obj],
    });
  };

  removeItem = (index, array) => {
    this.setState({
      [array]: this.state[array].filter((item) => {
        return item !== this.state[array][index];
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
          removeItem={this.removeItem}
        />
        <CV {...this.state} />
      </div>
    );
  }
}

export default App;
