import React, { createContext, useState, useEffect, useMemo, useContext } from 'react';
// import authmanager from '../authmanager'

export const AuthDataContext = createContext(null);

const initialAuthData = {};

const AuthDataProvider = props => {
    const [authData, setAuthData] = useState(initialAuthData);

    useEffect(() => {
        const currentAuthData = somemanager.getAuthData()

        if (currentAuthData) {
            setAuthData(currentAuthData);
        }
    }, []);

    const onLogout = () => setAuthData(initialAuthData);
    
    const onLogin = newAuthData => setAuthData(newAuthData); 

    const authDataValue = useMemo({ ...authData, onLogin, onLogout }, [authData]);

    return <AuthDataContext.Provider value={authDataValue} {...props} />
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;