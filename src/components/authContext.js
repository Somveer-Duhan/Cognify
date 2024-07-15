import React,{createContext,useContext,useState} from 'react';

const AuthContext=createContext();

export const useAuth=()=>{
    return useContext(AuthContext);
};

export const AuthProvider=({children})=>{
    const [isAuthenticated,setIsAuthenticated]=useState(
        localStorage.getItem('isAuthenticated')===true
    )

const login=()=>{
    setIsAuthenticated(true);
    localStorage.getItem('isAuthenticated','true');
};
const logout=()=>{
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
};
return (
    <AuthContext.Provider value={{isAuthenticated,login,logout}}>
        {children}
    </AuthContext.Provider>
);
};
