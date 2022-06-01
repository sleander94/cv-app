import React from 'react';
import '../styles/CV.css';

class CV extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let work = [];
    for (let i = 0; i < this.props.work.length; i++) {
      work.push(
        <div className="work" key={i}>
          <div className="company">{this.props.work[i].company}</div>
          <div className="title">{this.props.work[i].title}</div>
          <div className="start">{this.props.work[i].start}</div>
          <div className="end">{this.props.work[i].end}</div>
          <div className="description">{this.props.work[i].description}</div>
        </div>
      );
    }
    let education = [];
    for (let i = 0; i < this.props.education.length; i++) {
      education.push(
        <div className="education" key={i}>
          <div className="course">{this.props.education[i].course}</div>
          <div className="school">{this.props.education[i].school}</div>
          <div className="start">{this.props.education[i].start}</div>
          <div className="end">{this.props.education[i].end}</div>
          <div className="description">
            {this.props.education[i].description}
          </div>
        </div>
      );
    }
    return (
      <div className="CV">
        <div className="personal">
          <div className="name">{this.props.personal[0].name}</div>
          <div className="email">{this.props.personal[0].email}</div>
          <div className="phone">{this.props.personal[0].phone}</div>
          <div className="address">{this.props.personal[0].address}</div>
          <div className="description">
            {this.props.personal[0].description}
          </div>
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
  }
}

export default CV;
