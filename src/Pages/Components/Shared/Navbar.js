import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineLocalShipping } from 'react-icons/md';

const Navbar = () => {
    return (
        <>
            <div className="flex container mx-auto items-center justify-between h-24">
                <div>
                    <span className='text-4xl text-primary font-bold'><Link to="/">Dealerz.</Link></span>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <FiPhoneCall className='text-xl mr-2.5'/>
                        <h1 className='text-base'>Call Center</h1>
                    </div>
                    <div className="flex items-center ml-9">
                        <MdOutlineLocalShipping className='text-xl mr-2.5'/>
                        <h1 className='text-base'>Shipping & Returns</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;