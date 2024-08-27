import { useState } from "react";
import xcircle from "../assets/icons/xcircle.svg";
import approvedtick from "../assets/icons/approvedtick.svg";
const MortgageInfoCardFirstTimeHome = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    const closeModalOnClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        toggleModal();
      }
    };
  
    return (
      <>
        <div
          className="flex flex-col border-2 items-center rounded-[20px] shadow-3xl px-10 py-10 w-[420px] hover:border-blue-950 hover:shadow-gray-600 cursor-pointer"
          onClick={toggleModal}
        >
          <img src={approvedtick} alt="Approval sign" width={28} height={28} />
          <h3 className="text-xl font-bold text-center font-palanquin mt-2">First-Time Homebuyer Programs</h3>
          <p className="mt-2 break-words font-montserrat text-md leading-normal text-slate-gray">Click to Learn More</p>
        </div>
  
        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={closeModalOnClickOutside}
          >
            <div className="relative bg-white rounded-lg max-w-lg max-h-[70%] overflow-y-auto mx-auto">
              <div className="sticky bg-gray-100 p-3 z-20 top-0">
                <button
                  onClick={toggleModal}
                  className="absolute right-3 text-gray-600 hover:text-gray-900"
                >
                  <img src={xcircle} width={25} height={25} alt="Close" />
                </button>
                <h3 className="text-lg font-bold">First-Time Homebuyer Programs</h3>
              </div>
              
              <div className="text-gray-700 p-5">
                <p>
                    Are you ready to embark on the exciting journey to homeownership? Adelbin offers a comprehensive first-time home buyer program designed to make your experience smooth and successful.
                </p>

                <p className="mt-2">
                    Why Choose Our First-Time Home Buyer Program?
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Personalized Guidance:</strong> Receive one-on-one support from pre-approval to closing.
                  </li>
                  <li>
                    <strong>Educational Resources:</strong> Access valuable workshops to empower your decision-making.
                  </li>
                  <li>
                    <strong>Exclusive Benefits:</strong> Special incentives, grants, and tailored loan programs.
                  </li>
                  <li>
                    <strong> Expert Negotiation:</strong> Similar to the FHA Streamline, this option is for veterans with VA loans, offering a simplified and faster refinancing process.
                  </li>
                  <li>
                    <strong>USDA Streamline Refinance:</strong> Benefit from my expertise to secure the best terms.
                  </li>
                  <li>
                    <strong>Stress-Free Experience:</strong> Focus on finding your dream home while I handle the details.
                  </li>
                </ul>
                <p className="mt-2">
                    Ready to start your homeownership journey? Get in touch to learn more about our program and take the first step towards owning your dream home.
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default MortgageInfoCardFirstTimeHome