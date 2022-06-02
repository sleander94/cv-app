import React from 'react';
import Job from './Job';

const Work = ({ work, handleInputChange, addItem, removeItem }) => {
  const workList = work.map((job) => (
    <Job
      jobInfo={work[work.indexOf(job)]}
      key={work.indexOf(job)}
      number={work.indexOf(job)}
      handleInputChange={handleInputChange}
      removeItem={removeItem}
      work={work}
      addItem={addItem}
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
