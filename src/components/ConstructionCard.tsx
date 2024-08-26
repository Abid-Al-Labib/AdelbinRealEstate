
import { FC } from "react";

interface ConstructionCardProps{
  iconURL: string;
  alttag : string
  heading: string;
  subtext: string;
}

const ConstructionCard: FC<ConstructionCardProps> = ({ iconURL, alttag, heading, subtext }) => {
  return (
    <div className="flex flex-col flex-1 border-2 rounded-[20px] shadow-3xl px-10 py-10">
      <div className="w-10 h-10 flex justify-center items-center bg-yellow-500 rounded-lg">
        <img src={iconURL} alt={alttag} width={28} height={28} />
      </div>
      <h3 className="text-xl font-bold font-palanquin mt-2">{heading}</h3>
      <p className="mt-2 break-words font-montserrat text-md leading-normal text-slate-gray">{subtext}</p>
    </div>
  );
};

export default ConstructionCard;



