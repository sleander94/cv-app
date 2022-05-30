import React, { Component } from 'react';

class Personal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="personal">
        <h3>Personal Information</h3>
        <label htmlFor="name">
          Name:{' '}
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={this.props.personal.name}
            onChange={this.props.handleChange}
          ></input>
        </label>

        <label htmlFor="email">
          Email:{' '}
          <input
            type="email"
            name="email"
            placeholder="yourname@email.com"
          ></input>
        </label>

        <label htmlFor="phone">
          Phone:{' '}
          <input type="number" name="phone" placeholder="(555)555-5555"></input>
        </label>

        <label htmlFor="address">
          Address:{' '}
          <input
            type="text"
            name="address"
            placeholder="123 Main St, Town, ST 12345, USA"
          ></input>
        </label>

        <label htmlFor="description">
          Description:{' '}
          <textarea
            name="description"
            placeholder="Additional personal information."
          ></textarea>
        </label>
      </div>
    );
  }
}

export default Personal;
