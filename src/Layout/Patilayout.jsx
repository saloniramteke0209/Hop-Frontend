import React from 'react';
import { Outlet } from 'react-router-dom';
// import Navbar from './Header/Navbar';
import Patinavbar from '../Navbar/Patinavbar.jsx';
import Footer from './Footer.jsx';


const Patilayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-black">
            <Patinavbar />
            <main className="flex-grow p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Patilayout;