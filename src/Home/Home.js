import React from 'react';
import Footer from './Footer/Footer';
import Banner from './Header/Banner';
import Products from '../Home/Products/Products'


import Menubar from './Header/Menubar';


const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;