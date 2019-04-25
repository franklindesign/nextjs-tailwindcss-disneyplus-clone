import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

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
      <div>
        <img src="./static/slides/slide3.jpg" alt="Avengers: Endgame" />
      </div>
      <div>
        <img src="./static/slides/slide2.jpg" alt="Toy Story 4" />
      </div>
      <div>
        <Link href="/CaptainMarvel">
          <a>
            <img src="./static/slides/slide4.jpg" alt="Captain Marvel" />
          </a>
        </Link>
      </div>
      <div>
        <img src="./static/slides/slide1.jpg" alt="Mandalorian" />
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
