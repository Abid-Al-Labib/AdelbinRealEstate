import { Link } from "react-router-dom"
import ServiceCard from "../components/ServiceCard"
import  {services} from "../constants/index"
import logo from "../assets/icons/logo.svg"

const Services = () => {
  return (
        <section
      className="flex xl:flex-row flex-col justify-center gap-10
      max-container
      w-full"
    >
        <div className="flex items-center flex-col max-xl:padding-x mt-5 relative pr-10">
            <img src={logo} height={650} width={650} alt="logo"/>
            <h3 className="whitespace-nowrap flex justify-start font-cursive text-4xl text-[90px]  max-sm:text-[50px] max-sm:leading-[64px] italic pb-4">
               A Tradition of Trust
            </h3>
        </div>

        <div className="max-container pt-2 grid grid-rows max-xl:grid-cols-1 gap-2 max-lg:flex-col max-xl:padding-x">
            {services.map((service)=>(
                <Link to={service.url}>
                    <ServiceCard 
                    key={service.label}
                    iconURL={service.iconURL}
                    label={service.label}
                    subtext={service.subtext}
                />
                </Link>
            ))}
        </div>

    </section>
  )
}

export default Services