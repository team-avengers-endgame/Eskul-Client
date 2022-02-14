import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import { Transition } from "@headlessui/react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logOut, user } = useAuth()
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl   mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <NavLink to='/'>
                  <img
                    className=" h-16 w-20"
                    src="https://i.ibb.co/Tt6z27D/Screenshot-9-removebg-preview.png"
                    alt="Eskul"
                  /></NavLink>
              </div>
            </div>


            <div>

              <div >

                <span className='hidden md:block'>

                  <NavLink

                    to="/"
                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-bold"
                  >
                    Schools
                  </NavLink>

                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-bold"
                  >
                    Gallery
                  </NavLink>

                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-bold"
                  >
                    Calendar
                  </NavLink>

                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-bold"
                  >
                    Reports
                  </NavLink>
                  <NavLink to="/aboutUs"

                    className="text-gray-300
                   hover:bg-gray-700
                    px-3 py-2 rounded-md text-lg 
                    font-bold">About Us</NavLink>
                  <NavLink

                    to='/'
                    className=" text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-bold"
                  >
                    Dashboard
                  </NavLink>

                  {user.email ?
                    <button
                      onClick={logOut}
                      className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-bold"
                    >logout</button>
                    :
                    <NavLink
                      to="/login"
                      className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-bold"
                    >
                      Login
                    </NavLink>
                  }

                </span>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className=" md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-left ">

                <NavLink

                  to="/"
                  className="text-gray-300 hover:bg-gray-700 px-3  py-2 rounded-md text-lg "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Schools
                </NavLink>
                <br />

                <NavLink
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Gallery
                </NavLink>
                <br />
                <NavLink
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Calendar
                </NavLink>
                <br />
                <NavLink
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Reports
                </NavLink>
                <br />
                <NavLink to="/aboutUs"

                  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg "
                  onClick={() => setIsOpen(!isOpen)}
                >About Us</NavLink>

                <br />
                <NavLink

                  to='/'
                  className=" text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Dashboard
                </NavLink>
                <br />
                {user.email ?
                  <button
                    onClick={logOut}
                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg "

                  >logout</button>
                  :
                  <NavLink
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg "
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Login
                  </NavLink>
                }
              </div>
            </div>
          )}
        </Transition>
      </nav>

    </>

  );
};

export default Navigation;