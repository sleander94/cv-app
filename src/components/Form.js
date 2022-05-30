import React, { Component } from 'react';
import Personal from './Personal';
import '../styles/Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <Personal {...this.props} handleChange={this.props.handleChange} />
      </form>
    );
  }
}

export default Form;
