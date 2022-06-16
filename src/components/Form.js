import React from 'react';
import Personal from './Personal';
import Work from './Work';
import Education from './Education';
import PDFConverter from './PDFConverter';
import '../styles/Form.css';

const Form = ({ values, handleInputChange, addItem, removeItem }) => {
  const addButtonAtEnd = (number, item, type, array) => {
    if (number === array.length - 1) {
      return (
        <button
          type="button"
          className="add"
          onClick={() => addItem(item, type)}
        >
          Add
        </button>
      );
    }
  };

  const removeButton = (number, type, array) => {
    if (array.length > 1) {
      return (
        <button
          type="button"
          className="remove"
          onClick={() => removeItem(number, type)}
        >
          Remove
        </button>
      );
    }
  };
  return (
    <form id="form">
      <Personal
        personal={values.personal}
        handleInputChange={handleInputChange}
      />
      <Work
        work={values.work}
        handleInputChange={handleInputChange}
        removeButton={removeButton}
        addButtonAtEnd={addButtonAtEnd}
      />

      <Education
        education={values.education}
        handleInputChange={handleInputChange}
        removeButton={removeButton}
        addButtonAtEnd={addButtonAtEnd}
      />
      <PDFConverter target="CV" />
    </form>
  );
};

export default Form;
