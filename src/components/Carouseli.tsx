import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image, { StaticImageData } from "next/image";
// images for carousel

interface CarouselImage {
  src: StaticImageData;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

const Carouseli = ({ images }: ImageCarouselProps) => {
  return (
    <div className="flex w-full justify-center mt-2 items-center">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        swipeable={true}
        dynamicHeight={false}
        showArrows={false}
        centerMode
        centerSlidePercentage={33}
      >
        {images.map((image) => (
          <div
            key={image.alt}
            className="flex justify-center items-center overflow-auto"
          >
            <Image
              placeholder="blur"
              src={image.src}
              alt={image.alt}
              className="rounded-sm shadow-md w-80 object-cover"
              priority={true}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carouseli;
