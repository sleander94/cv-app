import React, { Component } from 'react';
import Personal from './Personal';
import Work from './Work';
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
        />
      </form>
    );
  }
}

export default Form;
