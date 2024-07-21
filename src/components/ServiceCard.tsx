import { FC } from "react"

interface ServiceCardProps {
    iconURL: string,
    label: string,
    subtext: string
}

const ServiceCard: FC<ServiceCardProps>  = ({iconURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] w-full sm:min-w-[350px] border-2 rounded-[20px] shadow-3xl px-10 py-10 hover:border-crimson hover:shadow-gray-600">
        <div className="w-12 h-12 flex justify-center items-center bg-crimson rounded-full">
        <img src={iconURL} alt="label" width={30} height={30}/>
        </div>
        <h3 className="text-xl font-bold font-palanquin mt-5">{label}</h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
        <br />
        <p>click to learn more!</p>
    </div>
  )
}

export default ServiceCard