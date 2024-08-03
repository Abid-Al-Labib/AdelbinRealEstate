import { FC } from "react";
import approvedtick from "../assets/icons/approvedtick.svg"

interface ConstructionCardProps{
  heading: string;
  subtext: string;
}

const MortgageInfoCard: FC<ConstructionCardProps> = ({ heading, subtext }) => {
  return (
    <div className="flex flex-col border-2 items-center rounded-[20px] shadow-3xl px-10 py-10 w-[420px] hover:border-blue-950 hover:shadow-gray-600">
      <img src={approvedtick} alt="Approval sign" width={28} height={28} />
      <h3 className="text-xl font-bold font-palanquin mt-2">{heading}</h3>
      <p className="mt-2 break-words font-montserrat text-md leading-normal text-slate-gray">{subtext}</p>
    </div>
  );
};

export default MortgageInfoCard;



