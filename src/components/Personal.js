import React from 'react';

class Personal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="personalContainer">
        <h3>Personal Information</h3>
        <label htmlFor="name">
          Name:{' '}
          <input
            type="text"
            name="name"
            className="personal"
            data-index="0"
            value={this.props.personal[0].name}
            onChange={this.props.handleInputChange('personal')}
          ></input>
        </label>

        <label htmlFor="email">
          Email:{' '}
          <input
            type="email"
            name="email"
            className="personal"
            data-index="0"
            value={this.props.personal[0].email}
            onChange={this.props.handleInputChange('personal')}
          ></input>
        </label>

        <label htmlFor="phone">
          Phone:{' '}
          <input
            type="tel"
            name="phone"
            className="personal"
            data-index="0"
            value={this.props.personal[0].phone}
            onChange={this.props.handleInputChange('personal')}
          ></input>
        </label>

        <label htmlFor="address">
          Address:{' '}
          <input
            type="text"
            name="address"
            className="personal"
            data-index="0"
            value={this.props.personal[0].address}
            onChange={this.props.handleInputChange('personal')}
          ></input>
        </label>

        <label htmlFor="description">
          Description:{' '}
          <textarea
            name="description"
            className="personal"
            data-index="0"
            rows="4"
            cols="40"
            value={this.props.personal[0].description}
            onChange={this.props.handleInputChange('personal')}
          ></textarea>
        </label>
      </div>
    );
  }
}

export default Personal;
