import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    
    const toggleFavorite = (repo) => {
        setFavorites((prevFavorites) => {
            const isFavorite = prevFavorites.some((item) => item.id === repo.id);
            if (isFavorite) {
                return prevFavorites.filter((item) => item.id !== repo.id); 
            } else {
                return [...prevFavorites, repo]; 
            }
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
