import React from 'react';

class Job extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jobContainer">
        <label htmlFor="company">
          Company:{' '}
          <input
            type="text"
            name="company"
            className={this.props.number}
            placeholder="Business"
            value={this.props.jobInfo.company}
            onChange={this.props.handleJobChange}
          ></input>
        </label>
      </div>
    );
  }
}

export default Job;
