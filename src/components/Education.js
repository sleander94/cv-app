import React from 'react';
import School from './School';

class Education extends React.Component {
  render() {
    const educationList = this.props.education.map((school) => (
      <School
        schoolInfo={this.props.education[this.props.education.indexOf(school)]}
        key={this.props.education.indexOf(school)}
        number={this.props.education.indexOf(school)}
        handleInputChange={this.props.handleInputChange}
        removeItem={this.props.removeItem}
        addToArray={this.props.addToArray}
        education={this.props.education}
      />
    ));
    return (
      <div className="educationContainer">
        <h3>Education</h3>
        {educationList}
      </div>
    );
  }
}

export default Education;
