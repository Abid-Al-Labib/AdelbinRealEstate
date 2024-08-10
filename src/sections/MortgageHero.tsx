import ImageSlider from '../components/ImageSlider'
import { mortgageHeroImages } from '../constants'
const MortgageHero = () => {
  return (
    <section
        className="flex xl:flex-row flex-col justify-center min-h-screen gap-10
        max-container w-full bg-blue-950 bg-cover bg-center"
    >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-15">
            <h1 className="text-orange-300 pl-10 mt-10 font-palanquin text-4xl sm:text-8xl max-sm:text-[70px] max-sm:leading-[78px] font-bold">
                <span>Mortgage Solutions</span>
                <br />          
            </h1>
                <p className="font-montserrat pl-10 text-white text-xl sm:text-2xl font-bold leading-8 mt-6 sm:max-w-sm">
                    Solutions For Every Dream
                </p>

                <p className="font-montserrat pl-10 text-white text-base sm:text-lg leading-8 mt-6 sm:min-w-min">
                    Secure funding for your real estate ventures quickly and efficiently with personalized mortgage solutions.
                </p>

                <p className="font-montserrat pl-10 text-white text-base sm:text-lg leading-8 sm:min-w-min">
                    Start with a no-obligation discussion to explore the best products for your unique situation and make your dream purchase a reality!
                </p>     
        </div>

        <div className="relative flex-1 flex flex-row justify-center items-center xl:min-h-screen max-xl:py-40">
            <ImageSlider
                images={mortgageHeroImages}
            />        
        </div>
    </section>
  )
}

export default MortgageHero