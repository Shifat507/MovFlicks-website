import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from './MovieCard';
import { MovieContext } from '../provider/MovieDataProvider';
import { AuthContext } from '../provider/AuthProvider';

const AllMovies = () => {
    const { user } = useContext(AuthContext);
    const { setAllData } = useContext(MovieContext);
    const LoadedAllMovies = useLoaderData();
    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {
        if (user?.email) {
            // Filter movies based on the user's email
            const filteredMovies = LoadedAllMovies.filter(
                (movie) => movie.userEmail === user.email
            );
            setAllMovies(filteredMovies);
            setAllData(filteredMovies);
        } else {
            // Clear movies if user logs out
            setAllMovies([]);
            setAllData([]);
        }
    }, [LoadedAllMovies, user?.email, setAllData]);

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl font-bold text-center mt-6 mb-12'>All Movies</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {allMovies.length > 0 ? (
                    allMovies.map((movie, idx) => (
                        <MovieCard key={idx} movie={movie}></MovieCard>
                    ))
                ) : (
                    <p className='text-center text-gray-500'>
                        {user?.email ? 'No movies found for this account.' : 'Please log in to view all movies.'}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AllMovies;
