import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

const Auth = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" replace />;
};

export default Auth;
