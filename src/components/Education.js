import React from 'react';
import School from './School';

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const educationList = this.props.education.map((school) => (
      <School
        schoolInfo={this.props.education[this.props.education.indexOf(school)]}
        key={this.props.education.indexOf(school)}
        number={this.props.education.indexOf(school)}
        handleSchoolChange={this.props.handleSchoolChange}
        removeSchool={this.props.removeSchool}
      />
    ));
    return (
      <div className="educationontainer">
        <h3>Educational Experience</h3>
        {educationList}
        <button type="button" onClick={this.props.addSchool}>
          Add
        </button>
      </div>
    );
  }
}

export default Education;
