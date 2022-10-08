import { list } from 'postcss';
import React, { useState } from 'react';
import LInk from '../LInk/LInk';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const[open, setOpen]= useState(false);
    
    const routes = [
        {id: 1, name: 'Home', path: '/home'},
        {id: 1, name: 'Product', path: '/Product'},
        {id: 1, name: 'Order', path: '/Order'},
        {id: 1, name: 'Contact', path: '/Contact'},
        {id: 1, name: 'About', path: '/About'},
    ]


    return (
        
        <nav className='bg-gray-300 p-4'>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
                {
                    open ? <XMarkIcon/> : <Bars3Icon/>
                }
            </div>

            <ul className= {`md:flex  justify-center bg-gray-300 absolute md:static  duration-500 ease-in ${open ? 'top-14':'top-[-120px]'}`}>
                {
                    routes.map(route => <LInk key={route.id} route={route}></LInk>)
                }
            </ul>
            
        </nav>
    );
};

export default Navbar;