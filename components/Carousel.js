import { Carousel } from "react-responsive-carousel";
import Router from "next/router";

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
        <img src="/static/slides/slide3.jpg" alt="Avengers: Endgame" />
      </div>
      <div>
        <img src="/static/slides/slide2.jpg" alt="Toy Story 4" />
      </div>
      <div>
        <img src="/static/slides/slide4.jpg" alt="Captain Marvel" />
        <button
          onClick={() => Router.push("/CaptainMarvel")}
          className=" w-1/4 legend"
        >
          Watch
        </button>
      </div>
      <div>
        <img src="/static/slides/slide1.jpg" alt="Mandalorian" />
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
