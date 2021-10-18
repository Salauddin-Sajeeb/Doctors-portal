import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './menubar.css'
const Menubar = () => {
    return (
        <div>
            <div className="menubar-container">
                <div className="container">
                    <div className="row bg-light">
                        <div className="col-md-2">
                            <div className="logo-img m-2 w-50">
                                <img id="home" className="img-fluid" src="https://www.logopik.com/wp-content/uploads/edd/2018/09/Medical-Logo-Vector-Free-Download.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="menu-item ">
                                <ul className=" d-flex align-item-end justify-content-end mt-3 ">
                                    <NavLink className="navbar" to="/service">Services</NavLink>
                                    <NavLink className="navbar" to="/login">Login</NavLink>
                                    <NavLink className="navbar" to="/register">Register</NavLink>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;