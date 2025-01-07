import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/Localstorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    // localStorage.clear()

    const [userData, setUserData] = useState('');

    useEffect(() => {
        // Populate localStorage with initial data if not already present
        if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
            setLocalStorage();
        }

        // Fetch data from localStorage
        const { employees } = getLocalStorage();
        setUserData(employees);
    }, []);

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
