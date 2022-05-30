import React, { Component } from 'react';
import '../styles/CV.css';

class CV extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CV">
        <div className="personal">
          <h2 className="name">{this.props.personal.name}</h2>
          <div className="email">{this.props.personal.email}</div>
          <div className="phone">{this.props.personal.phone}</div>
          <div className="address">{this.props.personal.address}</div>
          <div className="description">{this.props.personal.description}</div>
        </div>
      </div>
    );
  }
}

export default CV;
