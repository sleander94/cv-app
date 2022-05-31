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
          <h2 className="name">{this.props.personal.name}</h2>
          <div className="email">{this.props.personal.email}</div>
          <div className="phone">{this.props.personal.phone}</div>
          <div className="address">{this.props.personal.address}</div>
          <div className="description">{this.props.personal.description}</div>
        </div>
        {work}
        {education}
      </div>
    );
  }
}

export default CV;
