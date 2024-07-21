import { FC } from "react";

interface ButtonProps {
    label: string;
    iconURL?: string;
  }
  

const Button: FC<ButtonProps> = ({label,iconURL}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-crimson rounded-full text-white border-rosewood'>
        {label}
        {iconURL && (
            <img 
                src={iconURL} 
                alt="button image" 
                className="ml-2 rounded-full w-5 h-5" 
            />
        )}
    </button>
  )
}

export default Button