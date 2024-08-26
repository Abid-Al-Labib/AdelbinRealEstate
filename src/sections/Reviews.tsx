
import Carousel from "../components/Carousel.tsx"
import CarouselCard from "../components/CarouselCard.tsx"
import { reviews } from "../constants/index.tsx"
const Reviews = () => {
  return (
    <section
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container ">
      <div className="flex flex-1 flex-col max-lg:text-center max-xl:padding-x">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          What our <span className="text-crimson">clients</span> say
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Hear stories from clients about their exceptional experience with my services.
        </p>
      </div>
      <div className="flex flex-1 w-full items-center px-6">
      <Carousel interval={6000}>
        {
          reviews.map((review,index)=>(
                  <CarouselCard key={index} feedback={review.feedback} customerName={review.customerName} />
          ))
        }
      </Carousel>
      </div>
    </section>
  )
}

export default Reviews


