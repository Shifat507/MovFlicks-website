import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=> {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleSignOut = () =>{
        setLoading(true);
        return signOut(auth)
    };

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const userInfo = {
        user, 
        loading,
        createUser,
        userLogin,
        handleSignOut,
        handleGoogleSignIn
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUSer)=>{
            setUser(currentUSer),
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;