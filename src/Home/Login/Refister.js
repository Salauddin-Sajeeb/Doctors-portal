import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { handleGoogleSignIn, handleEmailchange, handlePassword, handleRegister } = useAuth();
    return (
        <div>
            <form onSubmit={handleRegister} className="mt-5 p-2">
                <h2>Please Register</h2>
                <input onBlur={handleEmailchange} type="email" placeholder="please enter your mail" /> <br /> <br />
                <input onBlur={handlePassword} type="password" placeholder="password" /> <br /> <br />

                <button type="submit" className="btn-dark mx-2" >register</button>

                <button onClick={handleGoogleSignIn} className="btn-primary">Google sign in</button>
            </form>
            <div> Already Logged in?</div>

            <Link to="login">
                <button className="btn-danger">Login</button>
            </Link>
        </div>

    );
};

export default Register;