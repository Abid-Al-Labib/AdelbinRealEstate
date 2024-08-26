import { FC } from "react"

interface carouselCard {
    feedback: string,
    customerName: string
}


const CarouselCard:FC<carouselCard> = ({feedback,customerName}) => {
  return (
        <div className="mx-2 h-56 w-full flex justify-center items-center flex-col border-2 rounded-md shadow-md border-slate">
           
             <p className="mt-2 sm:mt-3 max-w-sm text-center p-2 info-text">{feedback}</p>

            <h3 className="mt-3 sm:mt-5 mb-3 font-palanquin text-xl text-center font-bold">{customerName}</h3>
        </div>
  )
}

export default CarouselCard