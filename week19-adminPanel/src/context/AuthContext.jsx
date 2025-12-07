import { createContext, useContext, useState } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [token , setToken] = useState(localStorage.getItem('token'));

    const login = newToken => {
        localStorage.setItem('token' , newToken);
        setToken(newToken);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
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