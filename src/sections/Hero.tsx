import Button from "../components/Button.tsx"
import arrowRight from "../assets/icons/arrow-right.svg"
import brownHouse from "../assets/images/brownHouse.jpg"
import { statistics } from "../constants/index.tsx"


const Hero = () => {
  
  return (
    <section
      id="home"
      className="flex xl:flex-row flex-col justify-center min-h-screen gap-10
      max-container
      w-full"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 text-crimson">
            Adel Bin
          </span>
          <br />
          <span>Imani</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Providing unbeatable deals and exceptional service - turning your real estate dreams into reality.
        </p>    
        <Button
          label="Contact me"
          iconURL = {arrowRight}
        />
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
          
            <img
                className="rounded-lg shadow-lg object-contain"
                src={brownHouse}
                alt="Description 1"
                width={620}
                height={510}
            />

    </div>
      
    </section>
  )
}

export default Hero