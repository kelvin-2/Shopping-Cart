import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import {useCart} from './CartContext';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {cartCount} = useCart(); // Example cart count
    
    const toggleMenu = () => {
        //checking if it is open or not
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='fixed top-0 left-0 w-full z-50 shadow-lg bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700'>
            <div className='max-w-7xl mx-auto flex items-center justify-between p-4'>
                {/* Logo Section */}
                <div className='flex items-center space-x-2'>
                    <div className='bg-white p-2 rounded-full shadow-lg'>
                        <GraduationCap className='text-blue-600' size={28} />
                    </div>
                    <Link to='/' className='text-white font-bold text-2xl hover:text-yellow-300 transition-colors duration-300'>
                        StudentStreet
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className='hidden md:flex items-center space-x-8 text-lg'>
                    <Link 
                        to='/' 
                        className='text-white hover:text-yellow-300 hover:scale-105 transition-all duration-300 font-medium relative group'
                    >
                        Home
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300'></span>
                    </Link>
                    <Link 
                        to='/Products' 
                        className='text-white hover:text-yellow-300 hover:scale-105 transition-all duration-300 font-medium relative group'
                    >
                        Products
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300'></span>
                    </Link>
                    <Link 
                        to='/Help' 
                        className='text-white hover:text-yellow-300 hover:scale-105 transition-all duration-300 font-medium relative group'
                    >
                        How it works
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300'></span>
                    </Link>
                    <Link 
                        to='/Sell' 
                        className='bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg'
                    >
                        Sell Items
                    </Link>
                </div>

                {/* Search Bar (Desktop) */}
                <div className='hidden lg:flex items-center bg-white rounded-full px-4 py-2 shadow-lg'>
                    <Search className='text-gray-400 mr-2' size={20} />
                    <input 
                        type="text" 
                        placeholder="Search textbooks, notes..."
                        className='outline-none bg-transparent text-gray-700 w-64'
                    />
                </div>

                {/* Right Section */}
                <div className='flex items-center space-x-4'>
                    {/* User Profile */}
                    <Link 
                        to='/profile' 
                        className='hidden md:flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 text-white hover:bg-opacity-30 transition-all duration-300'
                    >
                        <User size={20} />
                        <span className='font-medium'>Profile</span>
                    </Link>

                    {/* Shopping Cart */}
                    <Link 
                        to='/carts' 
                        className='relative bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-opacity-30 hover:scale-110 transition-all duration-300 shadow-lg'
                    > 
                        <ShoppingCart size={24} />
                        {cartCount > 0 && (
                            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse'>
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMenu}
                        className='md:hidden text-white hover:text-yellow-300 transition-colors duration-300'
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-gradient-to-b from-purple-700 to-indigo-800`}>
                <div className='px-4 py-6 space-y-4'>
                    {/* Mobile Search */}
                    <div className='flex items-center bg-white rounded-full px-4 py-3 shadow-lg mb-4'>
                        <Search className='text-gray-400 mr-2' size={20} />
                        <input 
                            type="text" 
                            placeholder="Search textbooks, notes..."
                            className='outline-none bg-transparent text-gray-700 w-full'
                        />
                    </div>

                    <Link 
                        to='/' 
                        className='block text-white hover:text-yellow-300 text-lg font-medium py-2 border-b border-white border-opacity-20 transition-colors duration-300'
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link 
                        to='/Products' 
                        className='block text-white hover:text-yellow-300 text-lg font-medium py-2 border-b border-white border-opacity-20 transition-colors duration-300'
                        onClick={toggleMenu}
                    >
                        Products
                    </Link>
                    <Link 
                        to='/Help' 
                        className='block text-white hover:text-yellow-300 text-lg font-medium py-2 border-b border-white border-opacity-20 transition-colors duration-300'
                        onClick={toggleMenu}
                    >
                        How it works
                    </Link>
                    <Link 
                        to='/Sell' 
                        className='block bg-yellow-400 text-blue-900 px-4 py-3 rounded-full font-semibold text-center hover:bg-yellow-300 transition-colors duration-300 shadow-lg'
                        onClick={toggleMenu}
                    >
                        Sell Items
                    </Link>
                    <Link 
                        to='/profile' 
                        className='flex items-center space-x-2 text-white hover:text-yellow-300 text-lg font-medium py-2 transition-colors duration-300'
                        onClick={toggleMenu}
                    >
                        <User size={20} />
                        <span>Profile</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;