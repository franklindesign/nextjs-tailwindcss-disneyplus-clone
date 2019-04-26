import Slider from "react-slick";

const DisneyOriginals = () => {
  const settings = {
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      }
    ]
  };
  return (
    <div>
      <div className="recommended ml-2 mb-3">
        <h2 className="text-gray-500 mb-1 font-light">Disney+ Originals</h2>
      </div>
      <Slider {...settings}>
        <div className="shadow-xl px-2 py-2">
          <img
            src="/static/originals/high-school-musical.jpg"
            alt="high-school-musical"
          />
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img
              src="/static/originals/lady-and-the-tramp.jpg"
              alt="lady-and-the-tramp"
            />
          </a>
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img
              src="/static/originals/the-mandalorian.jpg"
              alt="the-mandalorian"
            />
          </a>
        </div>

        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img
              src="/static/originals/the-world-according-to-jeff-goldblum.jpg"
              alt="the-world-according-to-jeff-goldblum"
            />
          </a>
        </div>
        <div className="shadow-xl px-2 py-2">
          <img src="/static/originals/encore.jpg" alt="encore" />
        </div>
        <div className="shadow-xl px-2 py-2">
          <img src="/static/originals/hero-project.jpg" alt="hero-project" />
        </div>
      </Slider>
    </div>
  );
};

export default DisneyOriginals;
