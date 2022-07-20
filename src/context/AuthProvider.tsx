import React, { createContext, useState} from "react"

interface IProp {
    children: React.ReactNode
}

const AuthContext = createContext({})

export const AuthProvider = ({ children }: IProp) => {
    const [ auth, setAuth ] = useState({})

    return (    
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider> 
   )
}

export default AuthContext