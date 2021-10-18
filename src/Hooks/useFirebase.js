import { useState } from 'react';
import firebaseAuth from '../Home/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
firebaseAuth();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({})

    const googleProvider = new GoogleAuthProvider();

    /* const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => { })
    }

    const SignInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => { })
    } */
    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }


    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser('')
            })
    }












    return {
        user, logout, signInGoogle
    }

};

export default useFirebase;