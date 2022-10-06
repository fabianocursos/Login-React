import { Children, createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ Children }) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token")
        const usersStorage = localStorage.getItem("user_db")

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email

            );
            if (hasUser) setUser(hasUser[0])
        }

    })

    return <AuthContext.Provider>{Children}</AuthContext.Provider>
}