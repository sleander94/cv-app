import React from 'react';

const School = ({
  education,
  schoolInfo,
  number,
  addButtonAtEnd,
  removeButton,
  handleInputChange,
}) => {
  return (
    <div className="schoolContainer">
      <label htmlFor="course">
        Course:{' '}
        <input
          type="text"
          name="course"
          className="school"
          data-index={number}
          value={schoolInfo.course}
          onChange={handleInputChange('education')}
        ></input>
      </label>
      <label htmlFor="school">
        School:{' '}
        <input
          type="text"
          name="school"
          className="school"
          data-index={number}
          value={schoolInfo.school}
          onChange={handleInputChange('education')}
        ></input>
      </label>
      <label htmlFor="start">
        Start:{' '}
        <input
          type="text"
          name="start"
          className="school"
          data-index={number}
          value={schoolInfo.start}
          onChange={handleInputChange('education')}
        ></input>
      </label>
      <label htmlFor="end">
        End:{' '}
        <input
          type="text"
          name="end"
          className="school"
          data-index={number}
          value={schoolInfo.end}
          onChange={handleInputChange('education')}
        ></input>
      </label>
      <label htmlFor="description">
        Description:{' '}
        <textarea
          name="description"
          className="school"
          data-index={number}
          rows="4"
          cols="40"
          value={schoolInfo.description}
          onChange={handleInputChange('education')}
        ></textarea>
      </label>
      <div className="buttonContainer">
        {addButtonAtEnd(number, 'school', 'education', education)}
        {removeButton(number, 'education', education)}
      </div>
    </div>
  );
};

export default School;
