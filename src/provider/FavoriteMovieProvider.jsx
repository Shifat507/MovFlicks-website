import React, { useState } from 'react';
import { createContext } from 'react';
export const FavMovieContext = createContext(null);
const FavoriteMovieProvider = ({children}) => {
    const [favMovie, setFavMovie] = useState([]);
    const favMovieInfo = {
        favMovie,
        setFavMovie
    }
    return (
        <FavMovieContext.Provider value={favMovieInfo}>
            {children}
        </FavMovieContext.Provider>
    );
};

export default FavoriteMovieProvider;