// Import necessary dependencies and components
import { slides } from '@/constants';
import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

// Slider component for displaying a slideshow
function Slider() {
  // State to manage the current slide index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to navigate to the previous slide
  const prevSlide = (): void => {
    const isFirstSlide: boolean = currentIndex === 0;
    const newIndex: number = isFirstSlide
      ? slides.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to navigate to the next slide
  const nextSlide = (): void => {
    const isLastSlide: boolean = currentIndex === slides.length - 1;
    const newIndex: number = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function to navigate to a specific slide
  const goToSlide = (slideIndex: number): void => {
    setCurrentIndex(slideIndex);
  };

  // Effect to automatically advance to the next slide every 3000 milliseconds (3 seconds)
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clean up the interval when the component unmounts or when currentIndex changes
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // Render the slider component
  return (
    <section className="max-w-[1600px] md:h-[780px] w-full pt-20 md:py-16 relative group">
      {/* Display the current slide as a background image */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]?.url})` }}
        className="w-full md:h-full bg-center bg-cover bg-no-repeat duration-500 h-[200px]"
      ></div>
      {/* Tag and description of the current slide */}
      <div className="flex flex-col mt-16 gap-y-3 py-4 md:gap-y-10 absolute top-[15%] mx-5 max-w-[200px] md:mx-20 md:max-w-lg transition-opacity duration-500 ease-in-out">
        <h1 className="text-2xl sm:text-6xl text-light">
          {slides[currentIndex]?.tag}
        </h1>
        <p className="hidden md:block text-xl font-semibold text-gray-200">
          {slides[currentIndex]?.desc}
        </p>
      </div>
      {/* Left Arrow for navigating to the previous slide */}
      <div className="hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-md md:text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow for navigating to the next slide */}
      <div className="hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-md md:text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* Display dots for each slide, allowing users to navigate directly to a specific slide */}
      <div className="flex absolute left-[50%] -translate-x-[50%] bottom-1 md:bottom-16 justify-center py-2">
        {slides.map((_, slideIndex: number) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-md md:text-2xl cursor-pointer text-light"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </section>
  );
}

// Export the Slider component as the default export
export default Slider;
