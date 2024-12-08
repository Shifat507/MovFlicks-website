import React from 'react';
import web1 from '../assets/alen-shopon2-Photoroom.jpg'
import web2 from '../assets/ararat-Photoroom.jpg'
import web3 from '../assets/golam-masud-Photoroom.jpg'
import web4 from '../assets/kaiser-Photoroom.jpg'
import web5 from '../assets/mohanagar-Photoroom.jpg'
import web6 from '../assets/sentigate-Photoroom.jpg'
import web7 from '../assets/share-sholo-Photoroom.jpg'
import Marquee from 'react-fast-marquee';


const WebSeries = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-12 mb-6'>Most trending Bangla Web series</h1>

            <Marquee>

                <div className="card card-compact bg-base-100 w-72 shadow-xl mx-2">
                    <figure>
                        <img
                            src={web1}
                            alt="" />
                    </figure>

                </div>
                <div className="card card-compact bg-base-100 w-72 shadow-xl mx-2">
                    <figure>
                        <img
                            src={web2}
                            alt="" />
                    </figure>

                </div>
                <div className="card card-compact bg-base-100 w-72 shadow-xl mx-2">
                    <figure>
                        <img
                            src={web3}
                            alt="" />
                    </figure>

                </div>
                <div className="card card-compact bg-base-100 w-72 shadow-xl mx-2">
                    <figure>
                        <img
                            src={web4}
                            alt="" />
                    </figure>

                </div>
                <div className="card card-compact bg-base-100 w-72 shadow-xl mx-2">
                    <figure>
                        <img
                            src={web5}
                            alt="" />
                    </figure>

                </div>
                <div className="card card-compact bg-base-100 w-72 shadow-xl mx-2">
                    <figure>
                        <img
                            src={web6}
                            alt="" />
                    </figure>

                </div>
                <div className="card card-compact bg-base-100 w-72 shadow-xl mx-2">
                    <figure>
                        <img
                            src={web7}
                            alt="" />
                    </figure>

                </div>

            </Marquee>
        </div>
    );
};

export default WebSeries;