import React from 'react';
import Banner from './Banner';
import WebSeries from './WebSeries';
import FAQ from './FAQ';
import { Link, useLoaderData } from 'react-router-dom';
import FeaturedMovie from './FeaturedMovie';


const Home = () => {
    const data = useLoaderData();

    // Sort the data by rating in descending order
    const sortedData = [...data].sort((a, b) => b.rating - a.rating);
    // console.log(sortedData);
    return (
        <div className=''>
            <Banner></Banner>

            <div>
                <h1 className='text-4xl font-bold mt-12 mb-6'>Featured Movies: </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        sortedData.slice(0, 6).map(movie => <FeaturedMovie movie={movie}></FeaturedMovie>)
                    }
                </div>
                <div className='flex justify-center my-10'>
                    <Link to='/allMovies' className="btn btn-error">Show All</Link>
                </div>
            </div>
            <WebSeries></WebSeries>
            <div className='w-10/12 mx-auto my-12'>
                <FAQ></FAQ>
            </div>

        </div>
    );
};

export default Home;