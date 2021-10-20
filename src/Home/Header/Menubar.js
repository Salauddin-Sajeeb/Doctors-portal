import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './menubar.css'
const Menubar = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <div className="menubar-container">
                <div className="container">
                    <div className="row bg-light">
                        <div className="col-md-2">
                            <div className="logo-img w-50">
                                <img id="home" className="img-fluid" src="https://www.logopik.com/wp-content/uploads/edd/2018/09/Medical-Logo-Vector-Free-Download.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="menu-item ">
                                <ul className=" d-flex align-item-end justify-content-end mt-3 ">

                                    <Navbar bg="light" variant="light">
                                        <Container>

                                            <Nav className="me-auto">
                                                <NavLink className="navlink mx-2 pt-2" to="/home">Home</NavLink>

                                                <NavLink className="navlink mx-2 pt-2" to="/products">Products</NavLink>
                                                {user?.email ?
                                                    <Button onClick={logout} variant="light">Logout</Button>
                                                    : <NavLink className="navlink mx-2 pt-2" to="/login">Login</NavLink>
                                                }
                                            </Nav>
                                            <Navbar.Collapse className="justify-content-end">
                                                <Navbar.Text>
                                                    Signed in as: <a href="#login">{user.displayName}</a>
                                                </Navbar.Text>
                                            </Navbar.Collapse>
                                        </Container>
                                    </Navbar>
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