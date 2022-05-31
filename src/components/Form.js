import React from 'react';
import Personal from './Personal';
import Work from './Work';
import Education from './Education';
import '../styles/Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <Personal
          personal={this.props.personal}
          handlePersonalChange={this.props.handlePersonalChange}
        />
        <Work
          work={this.props.work}
          handleJobChange={this.props.handleJobChange}
          addJob={this.props.addJob}
          removeJob={this.props.removeJob}
        />
        <Education
          education={this.props.education}
          handleSchoolChange={this.props.handleSchoolChange}
          addSchool={this.props.addSchool}
          removeSchool={this.props.removeSchool}
        />
      </form>
    );
  }
}

export default Form;
