import { useState } from "react";
import xcircle from "../assets/icons/xcircle.svg";
import approvedtick from "../assets/icons/approvedtick.svg";
export const MortgageInfoCardNoIncome = () => {
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
          <h3 className="text-xl font-bold text-center font-palanquin mt-2">No Income Verification Loans</h3>
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
                <h3 className="text-lg font-bold">No Income Verification Loans</h3>
              </div>
              
              <div className="text-gray-700 p-5">
                <p>
                    Unlock Homeownership with Our No Income Verification Loan Program!
                </p>

                <p className="mt-2">
                    Are traditional mortgage requirements holding you back from owning your dream home? Our No Income Verification Loan Program is designed to help you secure a mortgage without the need for extensive income documentation.
                </p>
                <p className="mt-2">
                    Why Choose Our No Income Verification Loan Program?
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Simplified Process:</strong> Skip the hassle of providing detailed income documentation. Our streamlined process makes it easier for you to qualify for a mortgage.
                  </li>
                  <li>
                    <strong>Flexible Eligibility:</strong> Whether you’re self-employed, a freelancer, or have non-traditional income sources, our program is tailored to meet your unique financial situation.

                  </li>
                  <li>
                    <strong>Competitive Rates:</strong> Enjoy competitive interest rates and terms that make homeownership more accessible and affordable.
                  </li>
                  <li>
                    <strong>Expert Guidance:</strong> With years of experience in the real estate and mortgage industry, I provide personalized support to help you navigate the loan process with confidence.
                  </li>
                  <li>
                    <strong>Fast Approval:</strong> Our efficient approval process ensures you can move forward with your home purchase quickly and smoothly.
                  </li>
                </ul>
                <p className="mt-2">
                    Take the First Step Towards Homeownership!
                </p>
                <p className="mt-2">
                    Contact me today to learn more about our No Income Verification Loan Program and discover how you can achieve your homeownership goals without the traditional income verification requirements.
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default MortgageInfoCardNoIncome