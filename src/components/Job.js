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
            placeholder="Google"
            value={this.props.jobInfo.company}
            onChange={this.props.handleJobChange}
          ></input>
        </label>
        <label htmlFor="title">
          Title:{' '}
          <input
            type="text"
            name="title"
            className={this.props.number}
            placeholder="Software Developer"
            value={this.props.jobInfo.title}
            onChange={this.props.handleJobChange}
          ></input>
        </label>
        <label htmlFor="start">
          Start:{' '}
          <input
            type="text"
            name="start"
            className={this.props.number}
            placeholder="2018"
            value={this.props.jobInfo.start}
            onChange={this.props.handleJobChange}
          ></input>
        </label>
        <label htmlFor="end">
          End:{' '}
          <input
            type="text"
            name="end"
            className={this.props.number}
            placeholder="2022"
            value={this.props.jobInfo.end}
            onChange={this.props.handleJobChange}
          ></input>
        </label>
        <label htmlFor="description">
          Description:{' '}
          <textarea
            name="description"
            className={this.props.number}
            placeholder="Responsibilities and accomplishments."
            rows="4"
            cols="40"
            value={this.props.jobInfo.description}
            onChange={this.props.handleJobChange}
          ></textarea>
        </label>
      </div>
    );
  }
}

export default Job;
