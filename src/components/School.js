import React from 'react';

class School extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="schoolContainer">
        <label htmlFor="course">
          Course:{' '}
          <input
            type="text"
            name="course"
            className="school"
            data-index={this.props.number}
            value={this.props.schoolInfo.course}
            onChange={this.props.handleInputChange('education')}
          ></input>
        </label>
        <label htmlFor="school">
          School:{' '}
          <input
            type="text"
            name="school"
            className="school"
            data-index={this.props.number}
            value={this.props.schoolInfo.school}
            onChange={this.props.handleInputChange('education')}
          ></input>
        </label>
        <label htmlFor="start">
          Start:{' '}
          <input
            type="text"
            name="start"
            className="school"
            data-index={this.props.number}
            value={this.props.schoolInfo.start}
            onChange={this.props.handleInputChange('education')}
          ></input>
        </label>
        <label htmlFor="end">
          End:{' '}
          <input
            type="text"
            name="end"
            className="school"
            data-index={this.props.number}
            value={this.props.schoolInfo.end}
            onChange={this.props.handleInputChange('education')}
          ></input>
        </label>
        <label htmlFor="description">
          Description:{' '}
          <textarea
            name="description"
            className="school"
            data-index={this.props.number}
            rows="4"
            cols="40"
            value={this.props.schoolInfo.description}
            onChange={this.props.handleInputChange('education')}
          ></textarea>
        </label>
        <button
          type="button"
          onClick={() => this.props.removeItem(this.props.number, 'education')}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default School;
