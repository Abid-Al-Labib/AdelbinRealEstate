import Button from "../components/Button.tsx"
import arrowRight from "../assets/icons/arrow-right.svg"
import adelimg from "../assets/images/adel.jpg"
import { heroImages } from "../constants/index.tsx"
import { statistics } from "../constants/index.tsx"
import { Link } from "react-router-dom"
import ImageSlider from "../components/ImageSlider.tsx"


const HomeAbout = () => {
  
  return (
    <section
      className="flex xl:flex-row flex-col justify-center min-h-screen gap-10
      max-container
      w-full"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-15">
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[70px] max-sm:leading-[78px] font-bold">
          <span>Get to know</span>
          <br />
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 text-crimson">
            Adelbin
          </span>
          
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 sm:max-w-sm">
            Achieve Real Estate success with a trusted partner. With a solid foundation and expertise, we secure the best deals for all your real estate needs. 
        </p>    
        <p className="font-montserrat text-slate-gray text-lg leading-8 mb-10 sm:max-w-sm">
          Empowering you with a wealth of resources to make data-driven real estate decisions with confidence!
        </p> 
        <Link to={"/ContactMe"}>
            <Button
            label="Contact me"
            iconURL = {arrowRight}
            />
        </Link>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
  
      </div>
      
      <div className="relative flex-1 flex flex-row justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <ImageSlider images={heroImages} />
        <img className="absolute -bottom-[3%] -right-[5%] border-2 border-black rounded-full"src={adelimg} width={200} height={200} alt="Adelbin" />
        
      </div>
      
    </section>
  )
}

export default HomeAbout