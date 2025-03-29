import React, { createContext, useContext, useState, useEffect } from 'react';
import { getToken, setToken, removeToken } from '../utils/auth';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider to wrap the app
export const AuthProvider = ({ children }) => {
  const [token, setAuthToken] = useState(getToken());

  useEffect(() => {
    if (token) {
      setToken(token);
    } else {
      removeToken();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = () => useContext(AuthContext);
