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
        address: 'City ST',
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
  });

  const handleInputChange = (type) => (e) => {
    let array = values;
    let item = { ...array[type][e.target.dataset.index] };
    item[e.target.name] = e.target.value;
    array[type][e.target.dataset.index] = item;
    setValues({ ...array });
  };

  const addItem = (item, type) => {
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
    let array = values;
    array[type].push(obj);
    setValues({
      ...array,
    });
  };

  const removeItem = (index, type) => {
    let array = values;
    let filteredType = array[type].filter((item) => {
      return item !== array[type][index];
    });
    array[type] = filteredType;
    setValues({
      ...array,
    });
  };

  return (
    <div className="App">
      <h1>CV - Generator</h1>
      <Form
        values={values}
        handleInputChange={handleInputChange}
        addItem={addItem}
        removeItem={removeItem}
      />
      <CV values={values} />
    </div>
  );
};

export default App;
