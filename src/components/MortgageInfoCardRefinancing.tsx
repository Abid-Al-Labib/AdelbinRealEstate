import { useState } from "react";
import xcircle from "../assets/icons/xcircle.svg";
import approvedtick from "../assets/icons/approvedtick.svg";

const MortgageInfoCardRefinancing = () => {
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
        <h3 className="text-xl font-bold text-center font-palanquin mt-2">Refinancing Options</h3>
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

              <h3 className="text-lg font-bold">Refinancing Options</h3>
            </div>
            <div className="text-gray-700 p-5">
              <p>This option allows you to change the interest rate and loan terms of your existing mortgage.</p>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Cash-Out Refinance</strong>: With this option, you take out a new mortgage for a larger amount than what you owe on your current loan, and you receive the difference in cash. This can be useful if you need funds for home improvements or other expenses.
                </li>
                <li>
                  <strong>Cash-In Refinance</strong>: This involves paying a large sum of money towards your mortgage balance during the refinancing process. It can help reduce your loan-to-value ratio and potentially lower your interest rate or monthly payments.
                </li>
                <li>
                  <strong>FHA Streamline Refinance</strong>: This is a simplified refinancing option for those with FHA loans. It requires less documentation and can be quicker to process.
                </li>
                <li>
                  <strong>VA Streamline Refinance</strong>: Similar to the FHA Streamline, this option is for veterans with VA loans, offering a simplified and faster refinancing process.
                </li>
                <li>
                  <strong>USDA Streamline Refinance</strong>: This option is for those with USDA loans, providing a simplified process with less documentation required.
                </li>
                <li>
                  <strong>No-Closing-Cost Refinance</strong>: This option allows you to refinance without paying upfront closing costs. Instead, the costs are rolled into the loan balance or the interest rate is slightly higher.
                </li>
                <li>
                  <strong>Short Refinance</strong>: This option is for homeowners at risk of foreclosure. The lender agrees to forgive a portion of the mortgage balance, allowing the homeowner to refinance the remaining amount.
                </li>
                <li>
                  <strong>Reverse Mortgage</strong>: This option is for homeowners aged 62 or older. It allows you to access your home equity without making monthly payments, but the loan balance increases over time.
                </li>
              </ul>
              <p className="mt-2">Each option has its own benefits and considerations, so it’s important to evaluate your financial goals and current mortgage situation to determine the best fit for you. If you have any specific questions or need further details, call 917-489-8919 to learn more!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MortgageInfoCardRefinancing;
