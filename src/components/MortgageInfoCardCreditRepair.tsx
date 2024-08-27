import { useState } from "react";
import xcircle from "../assets/icons/xcircle.svg";
import approvedtick from "../assets/icons/approvedtick.svg";

const MortgageInfoCardCreditRepair = () => {
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
          <h3 className="text-xl text-center font-bold font-palanquin mt-2">Credit Repair Assistance</h3>
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
                <h3 className="text-lg font-bold">Credit Repair Assistance</h3>
              </div>

              <div className="p-5 text-gray-700">
                <p>
                    I offer personalized solutions tailored to your unique financial situation, expert guidance from years of experience in real estate and mortgage, and comprehensive support every step of the way. My clients have seen proven results, improving their credit scores and achieving their real estate goals. Let me help you do the same! 
                </p>
                <p className="mt-2">If you have any specific questions or need further details, call 917-489-8919 to learn more!</p>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default MortgageInfoCardCreditRepair