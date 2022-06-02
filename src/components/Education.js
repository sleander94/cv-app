import React from 'react';
import School from './School';

const Education = ({ education, handleInputChange, addItem, removeItem }) => {
  const educationList = education.map((school) => (
    <School
      schoolInfo={education[education.indexOf(school)]}
      key={education.indexOf(school)}
      number={education.indexOf(school)}
      handleInputChange={handleInputChange}
      removeItem={removeItem}
      addItem={addItem}
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
