import React from 'react';
import '../styles/CV.css';

const CV = ({ values }) => {
  let work = [];
  for (let i = 0; i < values.work.length; i++) {
    work.push(
      <div className="work" key={i}>
        <div className="company">{values.work[i].company}</div>
        <div className="title">{values.work[i].title}</div>
        <div className="start">{values.work[i].start}</div>
        <div className="dash">-</div>
        <div className="end">{values.work[i].end}</div>
        <div className="description">{values.work[i].description}</div>
      </div>
    );
  }
  let education = [];
  for (let i = 0; i < values.education.length; i++) {
    education.push(
      <div className="education" key={i}>
        <div className="course">{values.education[i].course}</div>
        <div className="school">{values.education[i].school}</div>
        <div className="start">{values.education[i].start}</div>
        <div className="dash">-</div>
        <div className="end">{values.education[i].end}</div>
        <div className="description">{values.education[i].description}</div>
      </div>
    );
  }
  return (
    <div id="CV" className="CV">
      <div className="personal">
        <div className="name">{values.personal[0].name}</div>
        <div className="email">{values.personal[0].email}</div>
        <div className="phone">{values.personal[0].phone}</div>
        <div className="address">{values.personal[0].address}</div>
        <div className="description">{values.personal[0].description}</div>
      </div>
      <div className="workContainer">
        <h3>Work Experience</h3>
        {work}
      </div>

      <div className="educationContainer">
        <h3>Education</h3>
        {education}
      </div>
    </div>
  );
};

export default CV;
