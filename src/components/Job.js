import React from 'react';

const Job = ({
  work,
  jobInfo,
  number,
  handleInputChange,
  removeButton,
  addButtonAtEnd,
}) => {
  return (
    <div className="jobContainer">
      <label htmlFor="title">
        Title:{' '}
        <input
          type="text"
          name="title"
          className="job"
          data-index={number}
          value={jobInfo.title}
          onChange={handleInputChange('work')}
        ></input>
      </label>
      <label htmlFor="company">
        Company:{' '}
        <input
          type="text"
          name="company"
          className="job"
          data-index={number}
          value={jobInfo.company}
          onChange={handleInputChange('work')}
        ></input>
      </label>
      <label htmlFor="start">
        Start:{' '}
        <input
          type="text"
          name="start"
          className="job"
          data-index={number}
          value={jobInfo.start}
          onChange={handleInputChange('work')}
        ></input>
      </label>
      <label htmlFor="end">
        End:{' '}
        <input
          type="text"
          name="end"
          className="job"
          data-index={number}
          value={jobInfo.end}
          onChange={handleInputChange('work')}
        ></input>
      </label>
      <label htmlFor="description">
        Description:{' '}
        <textarea
          name="description"
          className="job"
          data-index={number}
          rows="4"
          cols="40"
          value={jobInfo.description}
          onChange={handleInputChange('work')}
        ></textarea>
      </label>
      <div className="buttonContainer">
        {addButtonAtEnd(number, 'job', 'work', work)}
        {removeButton(number, 'work', work)}
      </div>
    </div>
  );
};

export default Job;
