import { Carousel } from "react-responsive-carousel";
import { slides } from "../data/HeroCarousel";

const HeroCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      autoPlay
      interval={3000}
      infiniteLoop
      className="carouselSelect"
    >
      {slides.map(s => (
        <div key={s.id}>
          <img src={s.src} alt={s.title} />
        </div>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
