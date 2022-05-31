import React from 'react';

class School extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="instituteContainer">
        <label htmlFor="course">
          Course:{' '}
          <input
            type="text"
            name="course"
            className={this.props.number}
            placeholder="BS Computer Science"
            value={this.props.schoolInfo.course}
            onChange={this.props.handleInputChange('education')}
          ></input>
        </label>
        <label htmlFor="school">
          School:{' '}
          <input
            type="text"
            name="school"
            className={this.props.number}
            placeholder="University of Colorado"
            value={this.props.schoolInfo.school}
            onChange={this.props.handleInputChange('education')}
          ></input>
        </label>
        <label htmlFor="start">
          Start:{' '}
          <input
            type="text"
            name="start"
            className={this.props.number}
            placeholder="2018"
            value={this.props.schoolInfo.start}
            onChange={this.props.handleInputChange('education')}
          ></input>
        </label>
        <label htmlFor="end">
          End:{' '}
          <input
            type="text"
            name="end"
            className={this.props.number}
            placeholder="2022"
            value={this.props.schoolInfo.end}
            onChange={this.props.handleInputChange('education')}
          ></input>
        </label>
        <label htmlFor="description">
          Description:{' '}
          <textarea
            name="description"
            className={this.props.number}
            placeholder="Coursework and accomplishments."
            rows="4"
            cols="40"
            value={this.props.schoolInfo.description}
            onChange={this.props.handleInputChange('education')}
          ></textarea>
        </label>
        <button
          type="button"
          onClick={() => this.props.removeSchool(this.props.number)}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default School;
