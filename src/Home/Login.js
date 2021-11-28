
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Menubar from './Header/Menubar';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { signInGoogle, Loginuser, error, user } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindata = { ...loginData };
        newLogindata[field] = value;
        console.log(field, value, newLogindata);
        setLoginData(newLogindata)
    }
    const handleLogin = e => {
        e.preventDefault();
        Loginuser(loginData.email, loginData.password, location, history);
    }
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div>
            <Menubar></Menubar>
            <form onSubmit={handleLogin} className="mt-5 p-2">
                <h2>Please Log In</h2>
                <input onBlur={handleOnchange} type="email" name="email" placeholder="please enter your mail" /> <br /> <br />
                <input onBlur={handleOnchange} type="password" name="password" placeholder="password" /> <br /> <br />

                <button type="submit" className="btn-dark mx-2" >Log In</button>

                <button onClick={handleGoogleSignIn} className="btn-primary">Google sign in</button>
            </form>
            <div> New User?</div>

            <Link to="register">
                <button className="btn-danger">Register</button>
            </Link>
        </div>
    );
};

export default Login;