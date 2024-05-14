import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { MdRealEstateAgent } from "react-icons/md";
import { Navbar, TextInput, Button, Dropdown } from 'flowbite-react'
import { FaShippingFast } from "react-icons/fa";

const NavbarUp = () => {
  const [insertNewDataMenuOpen, setInsertNewDataMenuOpen] = useState(false);
  const [viewDatabaseMenuOpen, setViewDatabaseMenuOpen] = useState(false);

  const toggleInsertNewDataMenu = () => {
    setInsertNewDataMenuOpen(!insertNewDataMenuOpen);
  };

  const toggleDatabaseMenu = () => {
    setViewDatabaseMenuOpen(!viewDatabaseMenuOpen);
  };

  return (
    <Navbar className='border-b-2 sticky top-0'>
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className='self-centre whitespace-nowrap text-sm  sm:text-xl font-semibold dark:text-white'>
        
        <span className="flex items-center">
          <span className='text-gray-300'>
            <FaShippingFast className="text-5xl" />
          </span>
          <span className="text-yellow-400 p-2 m-2 text-2xl ml-1">Ship<span className='text-gray-300'>Mate</span></span>
        </span>


          {/* <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            ShipMate
          </span> */}
          
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 text-slate-300 dark:border-gray-700">
            <li className='p-1 text-md font-semibold'>
              <a
                href="/"
                // className="hover:text-yellow-200 text-lg px-3"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:text-yellow-700 md:p-0 md:dark:text-yellow-500 dark:bg-yellow-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
              {/*
            <li className='p-1 text-md font-semibold'> 
               <button
                id="dropdownNavbarLink1"
                onClick={toggleInsertNewDataMenu}
                data-dropdown-toggle="dropdownNavbar1"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-yellow-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Insert New Data{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

             {insertNewDataMenuOpen && <div
                id="dropdownNavbar1" style={{ position: "fixed" }}
                className="z-10   font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul onClick={toggleInsertNewDataMenu}
                  className="p-3 text-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-gray-400 dark:text-white"
                  aria-labelledby="dropdownNavbarLink1"
                >
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/add_buyer'>Add Buyer</Link>
                    </Navbar.Link>
                  </li>
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/add_seller'>Add Seller</Link>
                    </Navbar.Link>
                  </li>
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/add_agent'>Add Agent</Link>
                    </Navbar.Link>
                  </li>
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/add_property'>Add Property</Link>
                    </Navbar.Link>
                  </li>
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/add_property_details'>Add Property Details</Link>             </Navbar.Link>
                  </li>
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/add_tansaction'>Add Transaction</Link>               </Navbar.Link>
                  </li>
                </ul>
              </div>}
            </li> */}
            <li className='p-1 text-md font-semibold'>
              <button
                id="dropdownNavbarLink2"
                onClick={toggleDatabaseMenu}
                data-dropdown-toggle="dropdownNavbar2"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-yellow-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                View Database{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {viewDatabaseMenuOpen && <div
                id="dropdownNavbar2"
                style={{ position: "fixed" }}
                className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  onClick={toggleDatabaseMenu}
                  className="p-3 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 rounded-xl text-sm text-gray-900 dark:text-gray-400"
                  // className="p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarLink2"
                >
                  
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/Customer'>View Customer</Link>
                    </Navbar.Link>
                  </li>
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/Account'>View Account</Link>
                    </Navbar.Link>
                  </li>
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/CreditCard'>View CreditCard</Link>
                    </Navbar.Link>
                  </li>
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/Employee'>View Employee</Link>
                    </Navbar.Link>
                  </li>
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/Warehouse'>View Warehouse</Link>
                    </Navbar.Link>
                  </li>
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/Truck'>View Truck</Link>
                    </Navbar.Link>
                  </li>
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/Plane'>View Plane</Link>
                    </Navbar.Link>
                  </li>
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/Package'>View Package</Link>
                    </Navbar.Link>
                  </li>
                  <li className='p-1 text-md font-semibold'>
                    <Navbar.Link as={"div"} className='rounded'>
                      <Link to='/Orders'>View Orders</Link>
                    </Navbar.Link>
                  </li>
                </ul>
              </div>}
            </li>
            <li className='p-1 text-md font-semibold'>
              <Link
                to="/relationalSchema"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Relational Schema
              </Link>
            </li>
            <li className='p-1 text-md font-semibold'>
              <Link
                to="/ER"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Er Diagram
              </Link>
            </li>
            <li className='p-1 text-md font-semibold'>
              <Link
                to="/ourteam"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Our Team
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarUp;



// import React from 'react'
// import { Navbar, TextInput, Button, Dropdown, Avatar } from 'flowbite-react'
// import { AiOutlineSearch } from 'react-icons/ai'
// import { FaMoon, FaSun } from 'react-icons/fa'
// import { Link, useLocation } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTheme } from '../redux/theme/themeSlice';
// const Header = () => {

//     const path = useLocation().pathname;
//     const dispatch = useDispatch();
//     const { theme } = useSelector(state => state.theme)
//     const { currentUser } = useSelector((state) => state.user);
//     return (
//         <Navbar className='border-b-2'>
//             <Link to="/" className='self-centre whitespace-nowrap text-sm  sm:text-xl font-semibold dark:text-white'>
//                 <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
//                     BlogNow
//                 </span>
//                 It
//             </Link>
//
//

//

//
//
//             <Navbar.Collapse>
//                 <Navbar.Link active={path === "/"} as={"div"} className='rounded'>
//                     <Link to='/'>Home</Link>
//                 </Navbar.Link>
//                 <Navbar.Link active={path === "/about"} as={"div"} className='rounded'>
//                     <Link to='/about'>About</Link>
//                 </Navbar.Link>
//                 <Navbar.Link active={path === "/projects"} as={"div"} className='rounded'>
//                     <Link to='/projects'>Projects</Link>
//                 </Navbar.Link>
//             </Navbar.Collapse>
//
//     )
// }

// export default Header