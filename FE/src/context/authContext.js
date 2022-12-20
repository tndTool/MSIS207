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
    const updateInfo = async (userInfo) => {
        const res = await request.get('/auth/login');
        console.log(userInfo);
        const update = res.data.map(item => {
            if(item.id === currentUser.id) {
                return {...item, Firstname: userInfo.Firstname, Lastname: userInfo.Lastname}
            }
            return item;
        })
        const res2 =  await request.post('/auth/login', update);
        setCurrentUser(res2.data);
        console.log(res2);
    }

    const logout = async () => {
        await request.post('/auth/logout');
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return  (
    <AuthContext.Provider value={{currentUser, resStatus, login, logout, updateInfo}}>{children}</AuthContext.Provider>
    );
};
