import copyrightSign from "../assets/icons/copyright-sign.svg";
import FooterLogo from "../assets/icons/footer-logo.svg";
import housinglender from "../assets/icons/equal-housing-lender.svg"
import { footerLinks, socialMedia, disclaimer } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex lg:flex-row justify-between items-start gap-20 flex-wrap flex-col'>
        <div className='flex flex-col items-start'>
          <a href="./">
            <div className="flex flex-col items-center">
              <img
                src={FooterLogo}
                alt='logo'
                width={350}
                height={200}
                className='m-0'
              />
              <h3 className="whitespace-nowrap text-white text-4xl font-cursive italic m-0">
                A Tradition of Trust
              </h3>
            </div>
          </a>
          <p className='text-center mt-10 text-2xl leading-7 font-montserrat text-white-400 sm:max-w-sm'>
          Great Deals - Best Price
          </p>
          <p className='text-center text-2xl leading-7 font-montserrat text-white-400 sm:max-w-sm'>
          Your Best Solutions In Real Estate
          </p>

          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-16 h-16 bg-white rounded-full'
                key={icon.alt}
              >
                <a href={icon.url} target="_blank">
                  <img src={icon.src} alt={icon.alt} width={30} height={30} />
                </a>
              </div>
            ))}
              <img src={housinglender} alt="housing lender icon" width={80} height={80} />
          </div>

        </div>

        <div className="flex flex-col">
          <div className='flex flex-1 justify-start md:justify-end lg:gap-10 gap-20'>
              <div className="border-orange-300 lg:hover:border-orange-300 border-8 lg:border-white p-5 lg:p-10 rounded-lg flex flex-col mx-0 ">
                <h4 className='whitespace-nowrap text-orange-300 lg:hover:text-orange-300 font-montserrat text-xl lg:text-4xl leading-normal font-medium lg:text-white'>
                    Reach Out For Free Consultation
                </h4>
                <ul>
                  {footerLinks.map((link) => (
                    <li
                      className='text-orange-300 lg:hover:text-orange-300 mt-3 font-montserrat text-xl lg:text-4xl leading-normal lg:text-white'
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
      </div>
      
      <p className="mx-0 text-sm mt-10 w-max-sm text-slate-gray flex-1 flex">
              {disclaimer}
      </p>


      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <Link to={"/Terms&Conditions"}>
        <p className='font-montserrat cursor-pointer hover:underline'>Terms of Use</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;