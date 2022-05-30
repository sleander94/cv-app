import React, { Component } from 'react';
import '../styles/Personal.css';

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
            className="personal"
            placeholder="yourname@email.com"
            value={this.props.personal.email}
            onChange={this.props.handleChange}
          ></input>
        </label>

        <label htmlFor="phone">
          Phone:{' '}
          <input
            type="tel"
            name="phone"
            className="personal"
            placeholder="(555)555-5555"
            value={this.props.personal.phone}
            onChange={this.props.handleChange}
          ></input>
        </label>

        <label htmlFor="address">
          Address:{' '}
          <input
            type="text"
            name="address"
            className="personal"
            placeholder="123 Main St, Town, ST 12345, USA"
            value={this.props.personal.address}
            onChange={this.props.handleChange}
          ></input>
        </label>

        <label htmlFor="description">
          Description:{' '}
          <textarea
            name="description"
            className="personal"
            placeholder="Additional personal information."
            rows="4"
            cols="40"
            value={this.props.personal.description}
            onChange={this.props.handleChange}
          ></textarea>
        </label>
      </div>
    );
  }
}

export default Personal;
