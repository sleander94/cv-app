import React, { useState } from 'react';
import Form from './components/Form';
import CV from './components/CV';
import './styles/App.css';

const App = () => {
  const [values, setValues] = useState({
    personal: [
      {
        name: 'John Smith',
        email: 'johnsmith@email.com',
        phone: '(555)555-5555',
        address: 'City, ST',
        description: 'Professional Title',
      },
    ],
  });
  /*       work: [
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
    }; */

  /*     this.handleInputChange.bind(this);
    this.addToArray.bind(this);
    this.removeItem.bind(this);
  } */

  const handleInputChange = (type) => (e) => {
    let category = [...values[type]];
    let key = { ...category[e.target.dataset.index] };
    key[e.target.name] = e.target.value;
    category[e.target.dataset.index] = key;
    setValues({ [type]: category });
  };

  /*   handleInputChange = (type) => (e) => {
    let category = [...this.state[type]];
    let key = { ...category[e.target.dataset.index] };
    key[e.target.name] = e.target.value;
    category[e.target.dataset.index] = key;
    this.setState({ [type]: category });
  }; */

  /*  addToArray = (item, array) => {
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
  }; */

  return (
    <div className="App">
      <h1>CV - Generator</h1>
      <Form
        values={values}
        handleInputChange={handleInputChange}
        /*         addToArray={this.addToArray}
        removeItem={this.removeItem} */
      />
      <CV values={values} />
    </div>
  );
};

export default App;
