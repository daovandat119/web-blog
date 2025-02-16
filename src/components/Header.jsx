import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='flex flex-row-reverse lg:flex-row justify-between mx-5 items-center h-18 lg:h-24 lg:p-5 text-black'>
            <div>
                <a href='/'><img src='/src/assets/logo.webp' alt="logo" className="w-38 h-6 lg:h-5 lg:ml-10" /></a>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
