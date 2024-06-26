import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const HandleLogout = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err))
  }
  const navItems = <div className='flex justify-center items-center'>
    <li className='text-white'><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Menu</Link></li>
    <li><Link to='/shop/salad'>Shop</Link></li>
    <li><Link to='/secret'>Secret</Link></li>
    <li>
      <Link>
        <button className="btn">
          <FaShoppingCart />
          <div className="badge badge-secondary">+0</div>
        </button>
      </Link>
    </li>


    {
      user ? <><li onClick={HandleLogout} className="cursor-pointer flex justify-center items-center ml-3">Logout</li></> : <><li><Link to='/login'>Login</Link></li></>
    }
  </div>
  return (
    <div>
      <div className="navbar fixed z-20 text-white max-w-screen-xl mx-auto bg-black bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Resutaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;