import { createContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider( {children} ) {
    const [user, setUser] = useState(null);

    const login = (userInfo) => {
        setUser(userInfo);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
