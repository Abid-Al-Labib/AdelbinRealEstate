import ImageSlider from "../components/ImageSlider"
import { constructionHeroImages } from "../constants"

const ConstructionHero = () => {
  return (
    <section
        className="flex xl:flex-row flex-col justify-center min-h-screen gap-10
        max-container w-full bg-blue-950 bg-cover bg-center"
    >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-15">
            <h1 className="text-orange-300 pl-4 mt-10 font-palanquin text-4xl sm:text-8xl  font-bold ">
                <span>Construction Services</span>
                <br />          
            </h1>
                <p className="font-montserrat pl-6 text-white text-base sm:text-lg leading-8 mt-12 sm:min-w-min">
                    Licensed General Contractor Serving New York City & Nassau County.
                </p>

                <p className="font-montserrat pl-6 text-white text-base sm:text-lg leading-8 sm:min-w-min">
                    Delivering exceptional quality and innovative practices to ensure your project stands the test of time, all at the best price. 
                </p>     
        </div>

        <div className="relative flex-1 flex flex-row justify-center items-center xl:min-h-screen max-xl:py-40">
            <ImageSlider
                images={constructionHeroImages}
            />        
        </div>


    </section>

  )
}

export default ConstructionHero