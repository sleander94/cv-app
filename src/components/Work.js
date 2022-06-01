import React from 'react';
import Job from './Job';

class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const workList = this.props.work.map((job) => (
      <Job
        jobInfo={this.props.work[this.props.work.indexOf(job)]}
        key={this.props.work.indexOf(job)}
        number={this.props.work.indexOf(job)}
        handleInputChange={this.props.handleInputChange}
        removeItem={this.props.removeItem}
        work={this.props.work}
        addToArray={this.props.addToArray}
      />
    ));
    return (
      <div className="workContainer">
        <h3>Work Experience</h3>
        {workList}
      </div>
    );
  }
}

export default Work;
