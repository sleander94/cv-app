import React from 'react';
import Job from './Job';

const Work = ({ work, handleInputChange, removeButton, addButtonAtEnd }) => {
  const workList = work.map((job) => (
    <Job
      jobInfo={work[work.indexOf(job)]}
      key={work.indexOf(job)}
      number={work.indexOf(job)}
      handleInputChange={handleInputChange}
      removeButton={removeButton}
      addButtonAtEnd={addButtonAtEnd}
      work={work}
    />
  ));
  return (
    <div className="workContainer">
      <h3>Work Experience</h3>
      {workList}
    </div>
  );
};

export default Work;
