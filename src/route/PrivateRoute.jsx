import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Spinner></Spinner>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/signin'></Navigate>
};

export default PrivateRoute;