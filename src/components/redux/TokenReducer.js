import React from 'react';
import { connect } from 'react-redux';

const TokenReducer = (state = null, action) => {
  if (action.type === 'GETTOKEN') {
    return (
      state = action.text
    );
  }
  return (state);
};


export default TokenReducer;