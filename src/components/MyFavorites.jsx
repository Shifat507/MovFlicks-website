import React, { useContext } from 'react';
import { FavMovieContext } from '../provider/FavoriteMovieProvider';
import FavMovieCard from './FavMovieCard';

const MyFavorites = () => {
    const { favMovie } = useContext(FavMovieContext);
    

    return (
        <div className='bg-base-300 w-11/12 mx-auto p-8 rounded-lg'>
            <h1 className='text-2xl font-bold mb-4'>Favorite Movies</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    favMovie.length === 0 ? (
                        <p>No favorite movies added yet.</p>
                    ) : (
                        favMovie.map((movie, index) => <FavMovieCard movie={movie}></FavMovieCard>)
                    )
                }
            </div>
        </div>
    );
};

export default MyFavorites;
