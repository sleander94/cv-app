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
        handleJobChange={this.props.handleJobChange}
      />
    ));

    return (
      <div className="workContainer">
        <h3>Work Experience</h3>
        {workList}
        <button type="button" onClick={this.props.addJob}>
          Add
        </button>
      </div>
    );
  }
}

export default Work;