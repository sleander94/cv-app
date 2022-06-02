import React from 'react';
import School from './School';

const Education = ({
  education,
  handleInputChange,
  addButtonAtEnd,
  removeButton,
}) => {
  const educationList = education.map((school) => (
    <School
      schoolInfo={education[education.indexOf(school)]}
      key={education.indexOf(school)}
      number={education.indexOf(school)}
      handleInputChange={handleInputChange}
      removeButton={removeButton}
      addButtonAtEnd={addButtonAtEnd}
      education={education}
    />
  ));
  return (
    <div className="educationContainer">
      <h3>Education</h3>
      {educationList}
    </div>
  );
};

export default Education;
