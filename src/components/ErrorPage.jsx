import React from 'react';
import errorPage from '../assets/404-page.jpg'
const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={errorPage} alt="" />
        </div>
    );
};

export default ErrorPage;