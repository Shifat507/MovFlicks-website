import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from './MovieCard';

const AllMovies = () => {
    const allMovies = useLoaderData();
    return (
        <div className='w-11/12 mx-auto'>
            <h1>All Movies</h1>
            <div className='grid grid-cols-4 gap-5'>
                {
                    allMovies.map(movie => <MovieCard movie={movie}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default AllMovies;