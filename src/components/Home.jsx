import React from 'react';
import Banner from './Banner';
import WebSeries from './WebSeries';
import FAQ from './FAQ';


const Home = () => {

    return (
        <div>
            <Banner></Banner>

            <WebSeries></WebSeries>
            <div className='w-10/12 mx-auto my-12'>
                <FAQ></FAQ>
            </div>

        </div>
    );
};

export default Home;