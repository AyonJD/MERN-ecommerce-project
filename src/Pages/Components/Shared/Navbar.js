import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { Transition } from "@headlessui/react";
import { BsSearch, BsHeart, BsBell } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="flex container mx-auto items-center justify-between h-24">
                <div>
                    <span className='text-4xl text-primary font-bold'><Link to="/">Dealerz.</Link></span>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <FiPhoneCall className='text-xl mr-2.5' />
                        <h1 className='text-base'>Call Center</h1>
                    </div>
                    <div className="flex items-center ml-9">
                        <MdOutlineLocalShipping className='text-xl mr-2.5' />
                        <h1 className='text-base'>Shipping & Returns</h1>
                    </div>
                </div>
            </div>

            <nav className="bg-[#F5F5F5] py-4 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 md:px-0 sm:px-6">
                    <div className="flex items-center justify-between md:block">
                        <div className="flex items-center justify-between">

                            <div className="hidden md:flex justify-between items-center flex-1">
                                <div className="nav-item ml-10 md:ml-0 flex items-baseline space-x-4 text-lg">
                                    <Link
                                        to="/"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/shop"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Shop
                                    </Link>


                                    <Link
                                        to="/about"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        About
                                    </Link>

                                    <Link
                                        to="blog"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Blog
                                    </Link>
                                </div>

                                <div className='flex items-center relative flex-1'>
                                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                    <BsSearch className='absolute right-4' />
                                </div>

                                <div className="flex flex-1">
                                    <BsHeart />
                                    <AiOutlineShoppingCart />
                                    <CgProfile />
                                    <BsBell />
                                </div>

                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 ml-5 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-800 transform"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="mobile-nav px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    to="/"
                                    className="hover:bg-gray-700 hover:text-white text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/shop"
                                    className="hover:bg-gray-700 hover:text-white text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Shop
                                </Link>



                                <Link
                                    to="/about"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </Link>

                                <Link
                                    to="blog"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Blog
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </>
    );
};

export default Navbar;