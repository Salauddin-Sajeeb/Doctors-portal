import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { handleGoogleSignIn, RegisterUser } = useAuth();
    const [loginData, setLoginData] = useState({})

    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindata = { ...loginData };
        newLogindata[field] = value;
        console.log(field, value, newLogindata);
        setLoginData(newLogindata)

    }
    const handleRegister = e => {
        e.preventDefault();
        RegisterUser(loginData.email, loginData.password, loginData.name, history)

    }

    return (
        <div>
            <form onSubmit={handleRegister} className="mt-5 p-2">
                <h2>Please Register</h2>
                <input onBlur={handleOnChange} type="text" name="name" placeholder="please enter your Name" /> <br /> <br />
                <input onBlur={handleOnChange} type="email" name="email" placeholder="please enter your mail" /> <br /> <br />
                <input onBlur={handleOnChange} type="password" name="password" placeholder="password" /> <br /> <br />

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