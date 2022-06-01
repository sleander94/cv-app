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
        handleInputChange={this.props.handleInputChange}
        removeItem={this.props.removeItem}
      />
    ));
    return (
      <div className="educationontainer">
        <h3>Education</h3>
        {educationList}
        <button
          type="button"
          onClick={() => this.props.addToArray('school', 'education')}
        >
          Add
        </button>
      </div>
    );
  }
}

export default Education;
