
import { createContext, useState } from "react";

export const AuthenticationContext = createContext(null);

const AuthContext = ({ children }) => {

    const [user, setUser] = useState({});

    const loginUser = (user) => {
        console.log("User logged in:", user);
        setUser(user);
    }


    return (
        <AuthenticationContext.Provider value={{ user, loginUser }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthContext;
