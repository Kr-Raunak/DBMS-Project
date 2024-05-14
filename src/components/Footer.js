import React from "react";
import { Link } from "react-router-dom";
import { MdRealEstateAgent } from "react-icons/md";
import { Footer, FooterTitle } from 'flowbite-react'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs'
import { FaShippingFast } from "react-icons/fa";
const Footerdown = () => {
  return (



    <>
    

      <Footer container className='border border-t-8 border-teal-500 absolute bottom-0'>
        <div className='w-full max-w-7xl mx-auto p-8'>
          <div className="-m-12 flex flex-wrap items-center justify-between">
            
            <div className='grid -full justify-between sm:flex md:grid-cols-1 '>
                    <Link to="/" className='self-centre whitespace-nowrap text-sm  sm:text-xl font-semibold dark:text-white'>
                    <span className="flex items-center">
                      <span className='text-gray-300'>
                        <FaShippingFast className="text-2xl" />
                      </span>
                      <span className="text-yellow-400 p-2 m-2 text-xl ml-1">Ship<span className='text-gray-300'>Mate</span></span>
                    </span>
                        
                    </Link>
                </div>
            
            <div className="w-auto p-6">
              <ul className="-m-5 flex flex-wrap items-center">
                <li className="p-5">
                  <Footer.Link
                    href='https://github.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="text-gray-300 hover:text-blue-600"
                  >
                    Privacy Policy
                  </Footer.Link>
                </li>
                <li className="p-5">
                  <Footer.Link
                    href='https://github.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="text-gray-300 hover:text-blue-600"
                  >
                    Terms and Service
                  </Footer.Link>
                </li>
                <li className="p-5">
                  <Footer.Link
                    href='https://github.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="text-gray-300 hover:text-blue-600"
                  >
                    Return Policy
                  </Footer.Link>
                </li>
                <li className="p-5">
                  <Footer.Link
                    href='https://github.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="text-gray-300 hover:text-blue-600"
                  >
                    Contact Us
                  </Footer.Link>
                </li>
              </ul>
            </div>
            
            <Footer.Divider />
                <div className=' w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='#' by='My Blog' year = {new Date().getFullYear()} />

                    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        <Footer.Icon href='#' icon={BsFacebook} />                        
                        <Footer.Icon href='#' icon={BsInstagram} />
                        <Footer.Icon href='#' icon={BsTwitter} />
                        <Footer.Icon href='http://github.com' icon={BsGithub} />
                        <Footer.Icon href='#' icon={BsDribbble} />

                    </div>
                </div>
          </div>
        </div>
      </Footer>
    </>);
};

export default Footerdown;


