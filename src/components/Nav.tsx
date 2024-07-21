// // import headerlogo from '../assets/images/header-logo.svg'
// import hamburger from '../assets/icons/hamburger.svg'
// import { navLinks } from '../constants'
// const Nav = () => {
//   return (
//     <header className='z-20 padding-x py-8 absolute w-full'>
//         <nav className='flex justify-between items-center max-container'>
//             {/* <a href="./">
//                 <img 
//                 src={headerlogo} 
//                 alt="logo"
//                 width={130}
//                 height={29}
//                 />
//             </a> */}
//             <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
//                 {navLinks.map((item) => (
//                 <li key={item.label}>
//                     <a href={item.href } className='font-montserrat leading-normal text-lg text-slate-gray'>
//                         {item.label}
//                     </a>
//                 </li>
//                 ))}
//             </ul>
//             <div className='hidden max-lg:block'>
//                 <img src={hamburger} 
//                 alt="hamburger" 
//                 width={25} 
//                 height={25} />
//             </div>
//         </nav>
//     </header>
//   )
// }

// export default Nav


import { useState } from 'react';
// import headerlogo from '../assets/images/header-logo.svg';
import hamburger from '../assets/icons/hamburger.svg';
import closeIcon from '../assets/icons/xcircle.svg'; // Import a close icon
import { navLinks } from '../constants';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 bg-white z-20 padding-x py-8 w-full shadow-sm">
      <nav className="flex justify-between items-center max-container">
        {/* <a href="./">
          <img src={headerlogo} alt="logo" width={130} height={29} />
        </a> */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg font-bold hover:text-slate-600 hover:underline text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {!menuOpen && 
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
        }
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full shadow-lg p-8 flex flex-col items-start max-lg:block bg-white">
            <div className='flex justify-end'>
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
            <div className='flex justify-center rounded-full border-2 bg-gray-300 border-white'>
            <a
              key={item.label}
              href={item.href}
              className="font-montserrat leading-normal font-bold text-lg text-black m-4"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
            </div>

          ))}
        </div>
      )}
    </header>
  );
};

export default Nav;
