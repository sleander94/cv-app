import React from 'react';
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
            className="0"
            placeholder="John Doe"
            value={this.props.personal[0].name}
            onChange={this.props.handleInputChange('personal')}
          ></input>
        </label>

        <label htmlFor="email">
          Email:{' '}
          <input
            type="email"
            name="email"
            className="0"
            placeholder="yourname@email.com"
            value={this.props.personal[0].email}
            onChange={this.props.handleInputChange('personal')}
          ></input>
        </label>

        <label htmlFor="phone">
          Phone:{' '}
          <input
            type="tel"
            name="phone"
            className="0"
            placeholder="(555)555-5555"
            value={this.props.personal[0].phone}
            onChange={this.props.handleInputChange('personal')}
          ></input>
        </label>

        <label htmlFor="address">
          Address:{' '}
          <input
            type="text"
            name="address"
            className="0"
            placeholder="123 Main St, Town, ST 12345, USA"
            value={this.props.personal[0].address}
            onChange={this.props.handleInputChange('personal')}
          ></input>
        </label>

        <label htmlFor="description">
          Description:{' '}
          <textarea
            name="description"
            className="0"
            placeholder="Additional personal information."
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
