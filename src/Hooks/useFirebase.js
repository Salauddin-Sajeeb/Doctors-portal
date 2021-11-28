import { useEffect, useState } from 'react';
import firebaseAuth from '../Home/Login/Firebase/firebase.init';
import { getAuth, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
firebaseAuth();
const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({})
    const [error, setError] = useState({})


    const [isLoading, setIsloading] = useState(true)

    const googleProvider = new GoogleAuthProvider();


    //new user creation
    const RegisterUser = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                const NewUser = { email, displayName: name };
                setUser(NewUser);
                console.log(user)

                // setUserName();

                //Update name
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                history.replace('/');
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
    const Loginuser = (email, password, location, history) => {

        signInWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {

                // Signed in 
                const user = userCredential.user;
                const destination = location?.state?.from || '/';
                history.push(destination)
                // ...

            })
            .catch((error) => {
                setError(error.message)
            });

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
        error, user, Loginuser, logout, signInGoogle, isLoading, RegisterUser,
    }

};

export default useFirebase;