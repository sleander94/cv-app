import React from 'react';

class Job extends React.Component {
  constructor(props) {
    super(props);
  }

  addButtonAtEnd = () => {
    if (this.props.number === this.props.work.length - 1) {
      return (
        <button
          type="button"
          onClick={() => this.props.addToArray('job', 'work')}
        >
          Add
        </button>
      );
    }
  };

  render() {
    return (
      <div className="jobContainer">
        <label htmlFor="title">
          Title:{' '}
          <input
            type="text"
            name="title"
            className="job"
            data-index={this.props.number}
            value={this.props.jobInfo.title}
            onChange={this.props.handleInputChange('work')}
          ></input>
        </label>
        <label htmlFor="company">
          Company:{' '}
          <input
            type="text"
            name="company"
            className="job"
            data-index={this.props.number}
            value={this.props.jobInfo.company}
            onChange={this.props.handleInputChange('work')}
          ></input>
        </label>
        <label htmlFor="start">
          Start:{' '}
          <input
            type="text"
            name="start"
            className="job"
            data-index={this.props.number}
            value={this.props.jobInfo.start}
            onChange={this.props.handleInputChange('work')}
          ></input>
        </label>
        <label htmlFor="end">
          End:{' '}
          <input
            type="text"
            name="end"
            className="job"
            data-index={this.props.number}
            value={this.props.jobInfo.end}
            onChange={this.props.handleInputChange('work')}
          ></input>
        </label>
        <label htmlFor="description">
          Description:{' '}
          <textarea
            name="description"
            className="job"
            data-index={this.props.number}
            rows="4"
            cols="40"
            value={this.props.jobInfo.description}
            onChange={this.props.handleInputChange('work')}
          ></textarea>
        </label>
        <div className="buttonContainer">
          {this.addButtonAtEnd()}
          <button
            type="button"
            className="remove"
            onClick={() => this.props.removeItem(this.props.number, 'work')}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default Job;
