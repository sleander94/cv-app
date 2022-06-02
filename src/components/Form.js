import React from 'react';
import Personal from './Personal';
import Work from './Work';
import Education from './Education';
import '../styles/Form.css';

const Form = ({ values, handleInputChange }) => {
  return (
    <form>
      <Personal values={values} handleInputChange={handleInputChange} />
      {/*         <Work
          work={this.props.work}
          hand
          leInputChange={this.props.handleInputChange}
          addToArray={this.props.addToArray}
          removeItem={this.props.removeItem}
        />
        <Education
          education={this.props.education}
          handleInputChange={this.props.handleInputChange}
          addToArray={this.props.addToArray}
          removeItem={this.props.removeItem}
        /> */}
    </form>
  );
};

export default Form;
