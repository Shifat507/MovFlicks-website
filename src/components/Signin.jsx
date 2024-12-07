import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const Signin = () => {
    const {userLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();
    const [error, setError] = useState({})
    const handleSubmitSignin =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(email, password);
        userLogin(email, password)
        .then(res=>{
            console.log(res.user);
            navigate(location?.state ? location.state : '/')
        })
        .catch(err =>{
            setError({ ...error, login: err.code })
        })
    }
    const handleForgetPassword = ()=>{
        const email = emailRef.current.value;

        if(!email){
            alert('Please provide a valid email address')
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(res => {
                alert('Reset email sent. Please check you email')
            })
            .catch(error => {
                
            })
        }
    }
    return (
        
            <div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-24">
                    <form onSubmit={handleSubmitSignin} className="card-body">
                        <h2 className='text-4xl font-bold my-3 mx-auto'>Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            {
                                error.login && (
                                    <label className="label text-red-600">
                                        {error.login}
                                    </label>
                                )
                            }
                            <label onClick={handleForgetPassword} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                           
                        </div>
                        <p className='text-sm font-semibold'>Do not have account? <Link to='/register' className='text-red-600 underline'> Register Now</Link></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        
    );
};

export default Signin;