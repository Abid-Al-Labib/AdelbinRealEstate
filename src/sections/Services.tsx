import { Link } from "react-router-dom"
import ServiceCard from "../components/ServiceCard"
import  {services} from "../constants/index"
const Services = () => {
  return (
    <section className="" id="Services">
        <div className="flex justify-center max-xl:padding-x mt-10 relative">
            <h3 className="font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold pb-4">
                Services
            </h3>
            <div className="absolute bottom-0 left-0 w-full  h-1 bg-crimson"></div>
        </div>

        <div className="max-container pt-16 flex justify-center flex-wrap gap-9 max-lg:flex-col max-xl:padding-x">
            {services.map((service)=>(
                
                <ServiceCard 
                    key={service.label}
                    iconURL={service.iconURL}
                    label={service.label}
                    subtext={service.subtext}
                />
 
            ))}
        </div>

    </section>
  )
}

export default Services