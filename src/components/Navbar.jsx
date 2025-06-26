import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

function NavBar (){
    return(
        
        <nav className='fixed top-0 left-0 w-full z-50 shadow-lg bg-white'>
            <div className='max-w-7xl mx-auto flex items-center justify-between text-black p-4'>
                {/*left section*/}
                    <div className='flex items-center space-x-16 text-lg pl-10'>
                        <Link to='/'>Home</Link>
                        <Link to='/Products'>Products</Link>
                        <Link to='/Help'>How it works</Link>
                    </div>
                    {/* right section */}
                    <div>
                        <Link to= '/carts'> <ShoppingCart size={25} /> </Link> 
                    </div>
            </div>
        </nav>

    );
}

export default NavBar;