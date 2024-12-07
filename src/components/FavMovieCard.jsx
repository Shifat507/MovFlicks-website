import { Button } from '@material-tailwind/react';
import React from 'react';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FavMovieCard = ({movie}) => {
    const { _id, poster, title, genre, duration, year, rating } = movie;

    const hrs = Math.floor(duration / 60);
    const min = duration % 60;
    return (
        <div>
            <div className="max-w-sm bg-base-200 shadow-xl rounded-lg overflow-hidden">
                <div className="relative">
                    <img
                        src={poster}
                        alt="Movie Poster"
                        className="w-full h-60 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded text-white text-sm">
                        {year}
                    </div>
                </div>
                <div className="p-4 flex flex-col justify-between h-[12rem]">
                    {/* Title Section */}
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-bold">{title}</h2>
                        <p className="text-sm text-gray-600">{genre}</p>
                    </div>
                    {/* Duration */}
                    <p className="text-md text-gray-600 flex items-center gap-2">
                        <FaClock />
                        {hrs} Hrs {min} min
                    </p>
                    {/* Rating */}
                    <div className="flex items-center gap-2 my-2">
                        <span className="text-yellow-500">⭐ {rating}</span>
                    </div>
                    {/* Button */}
                    <Button className="btn btn-error w-full mt-2">
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FavMovieCard;