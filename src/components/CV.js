import React from 'react';
import '../styles/CV.css';

class CV extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let jobs = [];
    for (let i = 0; i < this.props.work.length; i++) {
      jobs.push(
        <div className="work" key={i}>
          <div className="company">{this.props.work[i].company}</div>
          <div className="title">{this.props.work[i].title}</div>
          <div className="start">{this.props.work[i].start}</div>
          <div className="end">{this.props.work[i].end}</div>
          <div className="description">{this.props.work[i].description}</div>
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
        {jobs}
      </div>
    );
  }
}

export default CV;
