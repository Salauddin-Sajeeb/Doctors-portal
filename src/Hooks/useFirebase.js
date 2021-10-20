import { useEffect, useState } from 'react';
import firebaseAuth from '../Home/Login/Firebase/firebase.init';
import { getAuth, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
firebaseAuth();
const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState([])
    const [isLogin, setIsLogin] = useState(false)

    const [isLoading, setIsloading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    //input email
    const handleEmailchange = e => {
        setEmail(e.target.value)
    }

    //password
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    //Register
    const handleRegister = e => {
        e.preventDefault();
        if (password.length < 6) {

            setError('password Must be atleast 6 characters ')
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            CreatwNewUser(email, password);
        }

    }
    //new user creation
    const CreatwNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                // setUserName();

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorCode)
                // ..
            });
    }
    //login
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const signInGoogle = () => {
        setIsloading(true);
        return signInWithPopup(auth, googleProvider)

    }
    //set user name
    /*  const setUserName = () => {
         updateProfile(auth.currentUser, { displayName: name })
             .then(result => { })
     }
  */
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsloading(false);
        });
        return () => unsubscribed;
    }, [])


    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser('')
            })
    }



    return {
        error, user, logout, signInGoogle, isLoading, handleEmailchange, handleRegister, handlePassword
    }

};

export default useFirebase;