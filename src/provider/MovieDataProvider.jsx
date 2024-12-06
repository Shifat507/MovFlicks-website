import React, { createContext, useState } from 'react';
export const MovieContext = createContext();
const MovieDataProvider = ({children}) => {
    const [allData, setAllData] = useState([]);
    const movieInfo = {
        allData,
        setAllData
    }
    return (
        <div>
            <MovieContext.Provider value={movieInfo}>
                {children}
            </MovieContext.Provider>
        </div>
    );
};

export default MovieDataProvider;