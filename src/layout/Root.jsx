import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto h-screen'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;