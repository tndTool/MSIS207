import { useState, createContext, useEffect } from 'react';
import request from '../utils/request';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const [resStatus, setResStatus] = useState();
    const login = async (inputs) => {
        console.log(inputs)
        const res = await request.post('/auth/login', inputs);
        setCurrentUser(res.data);
        setResStatus(res.status);
    };
    const updateInfo = async (userInfo) => {
            const res = await request.get('/auth/login');
            const update = res.data.filter(item => item._id === currentUser._id)
            .map((item) => {
                return {...item, Firstname: userInfo.firstname, Lastname: userInfo.lastname}
            } )
            const res2 =  await request.post('/users/updateuser', update[0]);
            setCurrentUser(res2.data);
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
