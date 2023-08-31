'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function Navbar() {
  const [navbar, setNavbar] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 890px)');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target) {
        return;
      }

      const targetElement = event.target as HTMLElement;

      if (!targetElement.closest('.dropdown-menu')) {
        // Clicked outside the dropdown menu, so close it
        handleDropdownClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 60) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav
      className={`h-[76px] fixed top-0 left-0 rounded-none w-full z-50 ${
        navbar ? 'sticky-fixed bg-white dark:bg-black drop-shadow-sm' : ''
      }`}
    >
      <div className="max-w-[1316px] flex justify-between items-center h-full mx-auto px-5">
        <div
          className={`flex gap-6 text-gray-nav-text dark:text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-[889px]:hidden`}
        >
          <Link
            href="/"
            className="mr-6 hover:text-primary"
          >
            logo
          </Link>
          {/* Dropdown */}

          <div className="relative dropdown-menu">
            <button
              className="flex items-center gap-2 hover:text-primary focus:outline-none transition-all"
              onClick={handleDropdownToggle}
            >
              Services
              {!isOpen ? (
                <FaAngleDown className="pointer-events-none" />
              ) : (
                <FaAngleUp className="pointer-events-none" />
              )}
            </button>

            {isOpen && (
              <div className="absolute top-full left-0 w-48 mt-2 bg-white shadow-md rounded-md">
                <ul>
                  <li>
                    <Link
                      href="/"
                      onClick={handleDropdownClose}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-t-md"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={handleDropdownClose}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 "
                    >
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={handleDropdownClose}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-b-md"
                    >
                      Web Audit
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/*  End of dropdown */}
          <Link
            href="/portfolio"
            className="hover:text-primary"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-8 text-gray-nav-text drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-[889px]:hidden">
          <ThemeSwitcher />
          <Link
            href="/"
            className="bg-primary px-5 py-2 rounded text-white hover:bg-primary-dark"
          >
            Contact
          </Link>
        </div>
        <div className="min-[890px]:hidden flex items-center justify-between w-full">
          <div className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <ThemeSwitcher />
          </div>
          <button
            className="text-2xl mr-4"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <FaBars />
          </button>
        </div>
        {/*    )} */}

        {/*  MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          /*  <div className="fixed right-0 bottom-0 h-full bg-bg-shade w-[300px]"> */
          <div
            className="modal-overlay"
            onClick={() => setIsMenuToggled(false)}
          >
            {/* CLOSE ICON */}
            <div className="sidebar-modal-nav sidebar-animation">
              <div className="flex justify-between items-center mx-5 my-5 mb-3 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                {/* <Image
                  src="/assets/images/logos/vanguard-logo.png"
                  alt="Vanguard Logo"
                  width={50}
                  height={56.25}
                  className=""
                  style={{ objectFit: 'cover' }}
                /> */}
                <p>logo</p>
                <FaTimes
                  className="text-xl text-gray-500 hover:text-gray-600 cursor-pointer"
                  onClick={() => setIsMenuToggled(true)}
                />
              </div>
              <hr className="mb-5" />
              {/* MENU ITEMS */}
              <div className="flex flex-col gap-7 pl-5 pr-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] ">
                <Link
                  href="/"
                  className="text-gray-nav-text"
                >
                  Web Development
                </Link>

                <Link
                  href="/"
                  className="text-gray-nav-text"
                >
                  Web Design
                </Link>

                <Link
                  href="/"
                  className="text-gray-nav-text"
                >
                  Web Audit
                </Link>

                <Link
                  href="/"
                  className="text-gray-nav-text"
                >
                  Portfolio
                </Link>
                <Link
                  href="/"
                  className="text-gray-nav-text"
                >
                  About
                </Link>
                <Link
                  href="/"
                  className="text-gray-nav-text"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
