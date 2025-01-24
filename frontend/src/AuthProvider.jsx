import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AuthContext } from './AppContext.jsx'

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwtToken'));

    useEffect(() => {
        const handleStorage = () => {
            setIsLoggedIn(!!localStorage.getItem('jwtToken'))
            setUserId(!!localStorage.getItem('userId'))
        };
        window.addEventListener('storage', handleStorage);

        return () => {
            window.removeEventListener('storage', handleStorage);
        }
    }, []);

    const login = (token, id) => {
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('userId', id);
        setIsLoggedIn(true);
        setUserId(id);
    };

    const logout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userId');
        setIsLoggedIn(false);
        setUserId(null)
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes ={
    children: PropTypes.node.isRequired,
}

