import ServiceCard from "../components/ServiceCard"
import  {services} from "../constants/index"
const Services = () => {
  return (
    <section className= "max-container flex justify-center flex-wrap gap-9 max-lg:flex-col max-xl:padding-x" id="Services">
        {services.map((service)=>(
          <ServiceCard key={service.label}
          iconURL={service.iconURL}
          label={service.label}
          subtext={service.subtext}
          />
        ))}
    </section>
  )
}

export default Services