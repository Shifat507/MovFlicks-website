import React from 'react';
import { FaFilm, FaUsers, FaHeart } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-base-100 text-base-content py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-center mb-8">
          Welcome to <span className="font-bold text-primary">movFlicks</span>, your ultimate destination for discovering movies, reviews, and everything related to cinema. Our mission is to create an immersive platform for movie enthusiasts to explore, share, and celebrate their love for films.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg shadow-lg bg-secondary text-secondary-content">
            <FaFilm className="text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Discover Movies</h2>
            <p>Explore an extensive library of movies across genres, from timeless classics to the latest blockbusters.</p>
          </div>

          <div className="text-center p-6 rounded-lg shadow-lg bg-accent text-accent-content">
            <FaUsers className="text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Join the Community</h2>
            <p>Connect with fellow movie lovers, share reviews, and discuss your favorite films.</p>
          </div>

          <div className="text-center p-6 rounded-lg shadow-lg bg-primary text-primary-content">
            <FaHeart className="text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Celebrate Cinema</h2>
            <p>Experience the magic of movies and join us in celebrating the art of storytelling.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg">
            At <span className="font-bold text-primary">movFlicks</span>, we believe movies have the power to inspire, entertain, and connect people. Thank you for being part of our journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
