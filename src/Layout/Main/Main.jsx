import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
    const loaction = useLocation()
    const noNav = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            { noNav || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noNav || <Footer></Footer>}
        </div>
    );
};

export default Main;