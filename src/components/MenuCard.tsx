import { FC } from "react";

interface MenuCardProps {
    iconURL: string;
    label: string;
    subtext: string;
  }
  
  const MenuCard: FC<MenuCardProps> = ({ iconURL, label, subtext }) => {
    return (
      <div className="flex flex-col flex-1 border-2 rounded-[20px] shadow-3xl px-10 py-10 hover:border-crimson hover:shadow-gray-600">
        <div className="w-10 h-10 flex justify-center items-center bg-crimson rounded-full">
          <img src={iconURL} alt={label} width={28} height={28} />
        </div>
        <h3 className="text-xl font-bold font-palanquin mt-2">{label}</h3>
      </div>
    );
  };
  
  export default MenuCard;