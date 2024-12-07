import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from './MovieCard';
import { MovieContext } from '../provider/MovieDataProvider';


const AllMovies = () => {
    const {setAllData} = useContext(MovieContext);
    const LoadedAllMovies = useLoaderData();
    const [allMovies, setAllMovies] = useState(LoadedAllMovies);
    setAllData(allMovies);
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl font-bold text-center mt-6 mb-12'>All Movies</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    allMovies.map((movie, idx) => <MovieCard key={idx} 
                    movie={movie}
                    ></MovieCard>)
                }
            </div>
        </div>
    );
};

export default AllMovies;