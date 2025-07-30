import React from 'react';
import { Outlet } from 'react-router-dom';
// import Navbar from './Header/Navbar';
import Footer from './Footer.jsx';
import Docnavbar from '../Navbar/Docnavabar.jsx';


const Doclayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-black">
            <Docnavbar />
            <main className="flex-grow p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Doclayout;