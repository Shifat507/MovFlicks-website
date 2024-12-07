import React, { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
    const {user} = useContext(AuthContext);
    console.log(user?.email);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        poster: "",
        title: "",
        genre: "",
        duration: "",
        year: "",
        rating: 0,
        summary: "",
        userEmail: user?.email
    });

    const [errors, setErrors] = useState({});
    const genres = ["Comedy", "Drama", "Horror", "Action", "Thriller"];
    const years = [2024, 2023, 2022, 2021, 2020, 2019];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRating = (rate) => {
        setFormData({ ...formData, rating: rate });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.poster || !/^https?:\/\/.+\..+/.test(formData.poster)) {
            errors.poster = "Please provide a valid URL.";
        }
        if (!formData.title || formData.title.length < 2) {
            errors.title = "Title must be at least 2 characters long.";
        }
        if (!formData.genre) {
            errors.genre = "Please select a genre.";
        }
        if (!formData.duration || formData.duration <= 60) {
            errors.duration = "Duration must be greater than 60 minutes.";
        }
        if (!formData.year) {
            errors.year = "Please select a release year.";
        }
        if (!formData.rating) {
            errors.rating = "Please select a rating.";
        }
        if (!formData.summary || formData.summary.length < 10) {
            errors.summary = "Summary must be at least 10 characters long.";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Movie Data:", formData)
            setFormData({
                poster: "",
                title: "",
                genre: "",
                duration: "",
                year: "",
                rating: 0,
                summary: "",
                userEmail: user?.email
            });
            setErrors({});
        }

        const newMovie = {...formData}
        console.log(newMovie);

        //send data to the server:

        fetch('http://localhost:5000/movies',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMovie)

        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "New movie has been added",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/allMovies')
            }

        })
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-5 shadow-md rounded-lg bg-base-200">
            <h1 className="text-2xl font-bold mb-5">Add Movie</h1>
            <form onSubmit={handleSubmit}>
                {/* Movie Poster */}
                <div className="mb-4">
                    <label className="block font-medium mb-2">Movie Poster URL</label>
                    <input
                        type="text"
                        name="poster"
                        value={formData.poster}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                    />
                    {errors.poster && <p className="text-red-500">{errors.poster}</p>}
                </div>

                {/* Movie Title */}
                <div className="mb-4">
                    <label className="block font-medium mb-2">Movie Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                    />
                    {errors.title && <p className="text-red-500">{errors.title}</p>}
                </div>

                {/* Genre */}
                <div className="mb-4">
                    <label className="block font-medium mb-2">Genre</label>
                    <select
                        name="genre"
                        value={formData.genre}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">Select Genre</option>
                        {genres.map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                    {errors.genre && <p className="text-red-500">{errors.genre}</p>}
                </div>

                {/* Duration */}
                <div className="mb-4">
                    <label className="block font-medium mb-2">Duration (minutes)</label>
                    <input
                        type="number"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                    />
                    {errors.duration && <p className="text-red-500">{errors.duration}</p>}
                </div>

                {/* Release Year */}
                <div className="mb-4">
                    <label className="block font-medium mb-2">Release Year</label>
                    <select
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">Select Year</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                    {errors.year && <p className="text-red-500">{errors.year}</p>}
                </div>

                {/* Rating */}
                <div className="mb-4">
                    <label className="block font-medium mb-2">Rating</label>
                    <div className="flex items-center gap-4">
                        <Rating
                            onClick={handleRating}
                            ratingValue={formData.rating}
                            // className="inline"
                        />
                        {errors.rating && <p className="text-red-500">{errors.rating}</p>}
                    </div>
                </div>


                {/* Summary */}
                <div className="mb-4">
                    <label className="block font-medium mb-2">Summary</label>
                    <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                    />
                    {errors.summary && <p className="text-red-500">{errors.summary}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded"
                >
                    Add Movie
                </button>
            </form>
        </div>
    );
};

export default AddMovie;
