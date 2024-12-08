import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, userUpdateData } = useContext(AuthContext);
    const [nameError, setNameError] = useState('');
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');
    const [firebaseError, setFirebaseError] = useState('');

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photoUrl = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Reset errors
        setNameError('');
        setPasswordError('');
        setFirebaseError('');

        // Name validation
        if (name.length < 5) {
            setNameError('Name must be more than 5 characters long');
            return;
        }

        // Password validation
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regex.test(password)) {
            setPasswordError(
                'Password must have at least one uppercase, one lowercase letter, and be at least 6 characters long'
            );
            return;
        }

        createUser(email, password)
            .then((res) => {
                const user = res.user;
                user.displayName = name;
                user.photoURL = photoUrl;

                setUser(user);
                userUpdateData({
                    displayName:name, photoURL:photoUrl
                })
                .then(() =>{
                    navigate('/');
                })
                .catch(error =>{
                    
                })     
            })
            .catch((error) => {
                // Capture Firebase error
                if (error.code === 'auth/email-already-in-use') {
                    setFirebaseError('This email is already in use. Please use a different email.');
                } else {
                    setFirebaseError('An unexpected error occurred. Please try again later.');
                }
                console.error(error.message);
            });
    };

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
                <form onSubmit={handleSubmitRegister} className="card-body">
                    <h2 className="text-4xl font-bold my-3 mx-auto">Registration</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />
                        {nameError && (
                            <label className="label text-xs text-red-600">
                                {nameError}
                            </label>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter your photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        {passwordError && (
                            <label className="label text-xs text-red-600">
                                {passwordError}
                            </label>
                        )}
                    </div>
                    {/* Firebase Error Message */}
                    {firebaseError && (
                        <p className="text-sm text-red-600 mt-2">{firebaseError}</p>
                    )}
                    <p className="text-sm font-semibold ms-2 mt-2">
                        Already have an account?{' '}
                        <Link to="/login" className="text-red-600 underline">
                            Login Now
                        </Link>
                    </p>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
