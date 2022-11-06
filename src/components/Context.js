import React, { useContext, useState } from "react";
// Context creation
const AppContext = React.createContext();


// Provider
const AppProvider = ({ children }) => {
    const [Query, setQuery] = useState('general');

    return <AppContext.Provider value={{ setQuery, Query }}>
        {children}
    </AppContext.Provider>
}
//Custom global hook
const useGlobalContext = () => {
    return useContext(AppContext)
};

export { AppContext, AppProvider, useGlobalContext };
// useContext hook