// UserContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface UserContextType {
  fullName: string;
  setFullName: (name: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fullName, setFullName] = useState(() => {
    return localStorage.getItem('fullName') || ''; // Initialize with localStorage value
  });

  const updateFullName = (name: string) => {
    setFullName(name);
    localStorage.setItem('fullName', name); // Persist in localStorage
  };

  return (
    <UserContext.Provider value={{ fullName, setFullName: updateFullName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
