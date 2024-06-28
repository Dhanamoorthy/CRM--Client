// withAuth.js (HOC)
import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  const isAuthenticated = /* Implement your authentication check here */ true; // Replace with actual authentication check logic

  const AuthRoute = (props) => {
    return isAuthenticated ? <Component {...props} /> : <Navigate to="/login" replace />;
  };

  return AuthRoute;
};

export default withAuth;
