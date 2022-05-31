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
          handleInputChange={this.props.handleInputChange}
        />
        <Work
          work={this.props.work}
          handleInputChange={this.props.handleInputChange}
          addToArray={this.props.addToArray}
          removeJob={this.props.removeJob}
        />
        <Education
          education={this.props.education}
          handleInputChange={this.props.handleInputChange}
          addToArray={this.props.addToArray}
          removeSchool={this.props.removeSchool}
        />
      </form>
    );
  }
}

export default Form;
