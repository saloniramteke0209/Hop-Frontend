import React from 'react';
import { Outlet } from 'react-router-dom';
// import Navbar from './Header/Navbar';
import Admnavbar from '../Navbar/Admnavbar.jsx';
import Footer from './Footer.jsx';

const Admlayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-black">
            <Admnavbar />
            <main className="flex-grow p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Admlayout;