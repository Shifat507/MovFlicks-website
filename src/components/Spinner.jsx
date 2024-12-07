import React, { useContext } from 'react';

const Spinner = () => {
    // const {loading} = useContext(AudioContext); 
    return (
        <div className='flex justify-center items-center max-h-screen'>

            <div>
                <span className="loading loading-spinner loading-lg"></span>
            </div>

        </div>
    );
};

export default Spinner;