import React, {createContext, useContext, useState} from "react";
export  const AuthContext=createContext();
export default function AtuhProvider({children}){
    const initialAuthUser=localStorage.getItem("Users");
    const [authUser,SetAuthUser]=useState(initialAuthUser?JSON.parse(initialAuthUser):undefined)
    return (
        <AuthContext.Provider value={[authUser,SetAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>useContext(AuthContext);
