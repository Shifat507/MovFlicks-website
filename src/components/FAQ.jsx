import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-12 mb-6'>Frequently Ask Questions </h1>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">What is MovFlicks?</div>
                <div className="collapse-content">
                    <p>MovFlicks is your one-stop platform for exploring movies and TV shows. Discover trending titles, read reviews, and get detailed information about your favorite entertainment content.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Do I need an account to use MovFlicks?</div>
                <div className="collapse-content">
                    <p>No, you can browse and explore the content without an account. However, creating an account allows you to save favorites, leave reviews, and receive personalized recommendations.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium"> Can I watch movies directly on MovFlicks?</div>
                <div className="collapse-content">
                    <p>MovFlicks is not a streaming platform. Instead, we provide detailed information, reviews, and trailers for movies and TV shows, along with links to official streaming platforms when available.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;