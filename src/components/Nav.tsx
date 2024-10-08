import { useState } from 'react';
import headerlogo from '../assets/icons/logo.svg';
import hamburger from '../assets/icons/hamburger.svg';
import closeIcon from '../assets/icons/xcircle.svg';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 bg-white z-20 padding-x pt-3 pb-1 w-full shadow-sm">
      <nav className="flex justify-between items-center max-container">
        <Link to="/">
          <div className="flex flex-col items-center">
            <img src={headerlogo} alt="logo" width={120} height={100} />
          </div>
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="font-montserrat text-2xl font-bold text-black hover:underline hover:text-slate-gray">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {!menuOpen && (
          <div className="hidden max-lg:block">
            <img
              src={hamburger}
              alt="menu toggle"
              width={25}
              height={25}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full shadow-lg p-8 flex flex-col items-start max-lg:block bg-white">
          <div className="flex justify-end w-full">
            <img
              src={closeIcon}
              alt="Close Icon toggle"
              width={25}
              height={25}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          </div>

          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="w-full flex justify-center rounded-full border-2 bg-gray-300 border-white cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-montserrat leading-normal font-bold text-lg text-black hover:underline m-4">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Nav;
