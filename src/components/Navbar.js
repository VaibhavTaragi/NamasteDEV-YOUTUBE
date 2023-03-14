import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

    //early return
    if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Subscriptions</li>
        </ul>
        <ul className='pt-5'>
            <li>Library</li>
            <li>History</li>
            <li>Your Videos</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
        </ul>
        <div className='pt-5'>
            <h1 className='text-l font-bold pb-2'>Subscriptions</h1>
            <ul>
                <li>Akshya Saini</li>
                <li>Ankur Warikoo</li>
                <li>Saket Gokhale</li>
                <li>Eminem</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar