import React, { useState } from 'react';

const Personal = ({ values, handleInputChange }) => {
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
          value={values.personal[0].name}
          onChange={handleInputChange('personal')}
        ></input>
      </label>

      <label htmlFor="email">
        Email:{' '}
        <input
          type="email"
          name="email"
          className="personal"
          data-index="0"
          value={values.personal[0].email}
          onChange={handleInputChange('personal')}
        ></input>
      </label>

      <label htmlFor="phone">
        Phone:{' '}
        <input
          type="tel"
          name="phone"
          className="personal"
          data-index="0"
          value={values.personal[0].phone}
          onChange={handleInputChange('personal')}
        ></input>
      </label>

      <label htmlFor="address">
        Address:{' '}
        <input
          type="text"
          name="address"
          className="personal"
          data-index="0"
          value={values.personal[0].address}
          onChange={handleInputChange('personal')}
        ></input>
      </label>

      <label htmlFor="description">
        Description:{' '}
        <input
          name="description"
          className="personal"
          data-index="0"
          value={values.personal[0].description}
          onChange={handleInputChange('personal')}
        ></input>
      </label>
    </div>
  );
};

export default Personal;
