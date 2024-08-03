import { FC, useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <img
        className="rounded-lg shadow-lg object-contain"
        src={images[currentIndex]}
        alt={`Hero image Slide ${currentIndex + 1}`}
        width={630}
        height={670}
      />
    </div>
  );
};

export default ImageSlider;