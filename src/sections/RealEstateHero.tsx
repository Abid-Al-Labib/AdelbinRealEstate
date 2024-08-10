import ImageSlider from "../components/ImageSlider"
import {realEstateHeroImages} from "../constants/index.js"

const RealEstateHero = () => {
  return (
    <section
        className="flex xl:flex-row flex-col justify-center min-h-screen gap-10
        max-container w-full bg-blue-950 bg-cover bg-center"
    >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-15">
            <h1 className="text-orange-300 pl-0 md:pl-10 mt-10 font-palanquin text-[95px] max-sm:text-[70px] max-sm:leading-[78px] font-bold">
                <span>Real Estate</span>        
            </h1>
            <p className="whitespace-nowrap font-montserrat pl-0 md:pl-10 text-white text-xl sm:text-2xl font-bold leading-8 mt-6 sm:max-w-sm">
                    Residential And Commercial Sales
            </p>
            <p className="font-montserrat pl-0 md:pl-10 text-white text-base sm:text-lg leading-8 mt-6 sm:min-w-min">
                Whether you’re buying or selling real estate, with Adelbin, you can be confident you’ll secure the best deals always.
            </p>

            <p className="font-montserrat pl-0 md:pl-10 mt-1 text-white text-base sm:text-lg leading-8 sm:min-w-min">
                Your confidence is guaranteed through actions, find a partner in Adelbin and help your bottom line. 
            </p>     
        </div>

        <div className="relative flex-1 flex flex-row justify-center items-center xl:min-h-screen max-xl:py-40">
            <ImageSlider
                images={realEstateHeroImages}
            />        
        </div>
    </section>
  )
}

export default RealEstateHero