import React from 'react';
import Personal from './Personal';
import Work from './Work';
import Education from './Education';
import '../styles/Form.css';

const Form = ({ values, handleInputChange, addItem, removeItem }) => {
  return (
    <form>
      <Personal
        personal={values.personal}
        handleInputChange={handleInputChange}
      />
      <Work
        work={values.work}
        handleInputChange={handleInputChange}
        addItem={addItem}
        removeItem={removeItem}
      />

      <Education
        education={values.education}
        handleInputChange={handleInputChange}
        addItem={addItem}
        removeItem={removeItem}
      />
    </form>
  );
};

export default Form;
