import { createContext, useState } from "react";

export const AuthenticationContext = createContext(null);

const AuthContext = ({ children }) => {
    const persistedUser = localStorage.getItem("user");
    const initialUser = persistedUser ? JSON.parse(persistedUser) : {};

    const [user, setUser] = useState(initialUser);

    const loginUser = (user) => {
        console.log("User logged in:", user);
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    }


    return (
        <AuthenticationContext.Provider value={{ user, loginUser }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthContext;