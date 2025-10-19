'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link href="/" className="text-2xl font-bold text-green-500">
            TechnicalChart KTV
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8  ">
            <NavLink href="/technical/dashboard" text=" TechnicalDashboard" />
            <NavLink href="/" text="Home" />

            <NavLink href="/auth/login" text="Sign In" />

          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-600 hover:text-blue-800">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="px-4 py-3 space-y-2">
            <MobileLink href="/" text="Home" />

            <MobileLink href="/signin" text="Sign In" />
            <MobileLink href="/signin" text="Sign In" />

          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, text, highlight = false }: { href: string; text: string; highlight?: boolean }) => (
  <Link
    href={href}
    className={`text-gray-700 hover:text-blue-600 font-medium transition duration-200 ${highlight ? 'bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600' : ''
      }`}
  >
    {text}
  </Link>
);

const MobileLink = ({ href, text, highlight = false }: { href: string; text: string; highlight?: boolean }) => (
  <Link
    href={href}
    className={`block px-3 py-2 rounded text-gray-800 hover:bg-blue-100 transition font-medium ${highlight ? 'bg-blue-500 text-white hover:bg-blue-600' : ''
      }`}
  >
    {text}
  </Link>
);

export default Navbar;
