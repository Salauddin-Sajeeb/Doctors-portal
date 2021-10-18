import React from 'react';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';
import Menubar from './Header/Menubar';


const Login = () => {
    const { signInGoogle } = useAuth();
    const handleRegistration = e => {
        e.preventDefault();
    }
    return (
        <div>
            <Menubar></Menubar>
            <form onSubmit={handleRegistration} className="mt-5 p-2">
                <label htmlFor="Email"></label>
                <input type="email" placeholder="please enter your mail" /> <br /> <br />
                <label htmlFor="Password"></label>
                <input type="password" placeholder="password" /> <br /> <br />
                <button className="btn-dark">Log in</button>
            </form>
            <div> Or</div>
            <button onClick={signInGoogle} className="btn-primary">Google sign in</button>
            <button className="btn-danger m-2">Register</button>
        </div>
    );
};

export default Login;