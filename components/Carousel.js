import { Carousel } from "react-responsive-carousel";

const HeroCarousel = () => {
  const slides = [
    { title: "Avengers: Endgame", src: "/static/slides/slide3.jpg", link: "/" },
    { title: "Toy Story 4", src: "/static/slides/slide2.jpg", link: "/" },
    { title: "Captain Marvel", src: "/static/slides/slide4.jpg", link: "/" },
    { title: "The Mandalorian", src: "/static/slides/slide1.jpg", link: "/" }
  ];

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
        <div>
          <img src={s.src} alt={s.title} key={s.title} />
        </div>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
