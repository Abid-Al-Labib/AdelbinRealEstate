import React, { useState, useEffect, ReactNode } from 'react';

interface CarouselProps {
  children: ReactNode;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ children, interval = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalSlides = React.Children.count(children);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, totalSlides]);

  const handleTransitionEnd = () => {
    // This is to handle the infinite loop effect, making it smooth.
    if (activeIndex === totalSlides) {
      setIsTransitioning(false);
      setActiveIndex(0);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden p-5">
      <div
        className={`flex transition-transform duration-700 ease-in-out ${
          isTransitioning ? '' : 'duration-0'
        }`}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {React.Children.map(children, (child) => (
          <div className="w-full flex-shrink-0">{child}</div>
        ))}
        <div className="w-full flex-shrink-0">
          {React.Children.toArray(children)[0]}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
