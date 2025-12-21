import { createContext, useContext, useState } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [token , setToken] = useState(localStorage.getItem('token'));
    const [userName , setUserName] = useState(localStorage.getItem('userName'));

    const login = (newToken , newUserName) => {
        localStorage.setItem('token' , newToken);
        localStorage.setItem('userName' , newUserName)
        setToken(newToken);
        setUserName(newUserName);
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        setToken(null);
        setUserName(null)
    }

    return (
        <authContext.Provider value = {{ token , login , logout }}>
            { children }
        </authContext.Provider>
    );
};

const useAuth = () => useContext(authContext);

export { useAuth };
export default AuthProvider;