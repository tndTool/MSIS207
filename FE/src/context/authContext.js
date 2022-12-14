import { useState, createContext, useEffect } from 'react';
import request from '../utils/request';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const [resStatus, setResStatus] = useState();
    const login = async (inputs) => {
        const res = await request.post('/auth/login', inputs);
        setCurrentUser(res.data);
        setResStatus(res.status);
    };

    const logout = async () => {
        await request.post('/auth/logout');
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return  (
    <AuthContext.Provider value={{currentUser, resStatus, login, logout}}>{children}</AuthContext.Provider>
    );
};
