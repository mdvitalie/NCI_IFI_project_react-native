import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'
// import { createContext } from 'vm'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: "Victor", }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}

