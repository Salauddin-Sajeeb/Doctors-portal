
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Menubar from './Header/Menubar';

const Login = () => {
    const { signInGoogle, handleRegister, handlePassword, handleEmailchange, error, user } = useAuth();

    const location = useLocation();
    const history = useHistory();
    console.log('came from', location.state?.from)
    const redirect_url = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div>
            <Menubar></Menubar>
            <form onSubmit={handleRegister} className="mt-5 p-2">
                <h2>Please Log In</h2>
                <input onBlur={handleEmailchange} type="email" placeholder="please enter your mail" /> <br /> <br />
                <input onBlur={handlePassword} type="password" placeholder="password" /> <br /> <br />
                {user.name ?
                    <button type="submit" className="btn-dark mx-2" >Log In</button> :
                    <button type="submit" className="btn-dark mx-2" >Register</button>
                }


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