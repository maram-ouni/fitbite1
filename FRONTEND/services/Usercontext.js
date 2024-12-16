import React, { createContext, useState, useContext } from 'react';

// Création du contexte
const UserContext = createContext();

// Fournisseur de contexte
export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook pour utiliser le contexte
export const useUser = () => {
    return useContext(UserContext);
};
