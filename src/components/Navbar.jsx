import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Button } from '@material-tailwind/react';
import { FcGoogle } from 'react-icons/fc';
import { FaSignOutAlt } from 'react-icons/fa';


const Navbar = () => {
    const { user, handleSignOut, handleGoogleSignIn } = useContext(AuthContext);
    const links = <>
        <li className='mx-2'><NavLink to='/'>Home</NavLink ></li>
        <li className='mx-2'><NavLink to='/addMovie'>Add Movie</NavLink ></li>
        <li className='mx-2'><NavLink to='/allMovies'>All Movies</NavLink ></li>
        <li className='mx-2'><NavLink to='/myFavorites'>My Favorites</NavLink ></li>

    </>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">MovFlicks</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <Button onClick={handleSignOut} className="btn text-black ">Sign Out
                            <div className='flex items-center gap-2 text-lg'>
                                <FaSignOutAlt />
                            </div>
                        </Button> : <div className='flex items-center gap-3'>
                            <Link to='/signin' className="btn">Sign in</Link>
                            <button onClick={handleGoogleSignIn} className='text-xl'><FcGoogle /></button>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};


export default Navbar;

