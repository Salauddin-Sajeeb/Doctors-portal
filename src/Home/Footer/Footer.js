
import React from 'react';
import { Link } from 'react-router-dom';




import './footer.css'

const Footer = () => {
    return (
        <footer className="bg-dark py-5">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-white">
                    <div className="col-md-4 col-sm-12 d-flex">

                        <p className="ms-2 fw-bolder">House 13, Road #01, <br />Uttara, Dhaka</p>
                    </div>
                    <div className="col-md-4 ">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" style={{ textDecoration: 'none' }} className="text-white">
                                    <span>Mobile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" style={{ textDecoration: 'none' }} className="text-white">
                                    <span>Phone</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" style={{ textDecoration: 'none' }} className="text-white">
                                    <span>Facebook</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" style={{ textDecoration: 'none' }} className="text-white">
                                    <span>instagram</span>
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-4">
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repudiandae doloremque voluptate consectetur nulla sed, labore culpa facilis saepe commodi!</p>

                    </div>
                </div>
            </div>
        </footer>
    );

};

export default Footer;