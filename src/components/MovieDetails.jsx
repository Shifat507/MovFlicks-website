import React, { useContext, useState } from 'react';
import { FaEdit, FaHeart } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FavMovieContext } from '../provider/FavoriteMovieProvider';

const MovieDetails = () => {
    const movieData = useLoaderData();
    const {setFavMovie} = useContext(FavMovieContext);
    const { _id, poster, title, genre, duration, year, rating, summary } = movieData;
    const hrs = Math.floor(duration / 60);
    const min = duration % 60;
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    
    const handleFavoriteList = ()=>{
        setFavMovie(prevMovies => [...prevMovies, movieData]);
        setIsActive(true)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully added to the Favorite List",
            showConfirmButton: false,
            timer: 1500
          });
    }

    const handleDelete = (_id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/movies/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            navigate('/allMovies')
                            

                        }
                    })

              
            }
          });
    }
    return (
        <div className='bg-base-300 w-8/12 mx-auto p-8 rounded-lg'>
            <div>
                <img src={poster} alt="" />
            </div>
            <div className='p-3'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <div className="badge badge-accent px-3 ">{genre}</div>
                </div>
                <div className="divider"></div>
                <div>
                    <h3 className='text-lg font-semibold mt-4'>Movie Details: </h3>
                    <li>Duration : {hrs} hrs {min} min</li>
                    <li>Release Year: {year}</li>
                    <li>Rating: {rating} ⭐</li>
                    <h4 className='text-sm font-semibold mt-5'>Summary: </h4>
                    <p className=''>{summary}</p>
                </div>
            </div>
            <div className='mt-4 mb-2 flex justify-between items-center'>

                <div className='flex items-center gap-8'>
                    <Link to={`/update/${_id}`} className='text-md text-green-600 font-bold px-6 py-1 rounded-xl border-2 border-green-600  flex items-center gap-3'>Update Movie <FaEdit /></Link>

                    <button onClick={handleFavoriteList} className={`
                        ${isActive ? 'text-md text-purple-400 font-bold px-6 py-1 rounded-xl border-2 border-purple-600 btn-disabled  flex items-center gap-3' : 'text-md text-purple-600 font-bold px-6 py-1 rounded-xl border-2 border-purple-600  flex items-center gap-3'}
                        `}>Favorite List <FaHeart /></button>
                </div>

                <div>
                    <button onClick={()=>handleDelete(_id)} className='text-md text-white font-bold px-6 py-1 rounded-lg bg-red-500 hover:bg-red-600 flex items-center gap-3'>Delete <RiDeleteBin5Line /></button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;