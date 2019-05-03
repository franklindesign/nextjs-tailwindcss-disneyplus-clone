import Slider from "react-slick";

const ActionAdventure = () => {
  const settings = {
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    className: "slides",
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
    <div className="mb-16">
      <div className="recommended ml-2 mb-3">
        <h2 className="text-gray-500 mb-1 font-light">Action/Adventure</h2>
      </div>
      <Slider {...settings}>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img
              src="./static/images/starwars-returnofthejedi.jpg"
              alt="starwars-returnofthejedi"
            />
          </a>
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img src="/static/images/disney-tarzan.jpg" alt="disney-tarzan" />
          </a>
        </div>
        <div className="shadow-xl px-2 py-2">
          <img
            src="/static/images/marvel-guardians-of-the-galaxy.jpg"
            alt="marvel-guardians-of-the-galaxy.jpg"
          />
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img
              src="/static/images/pixar-incredibles.jpg"
              alt="pixar-incredibles"
            />
          </a>
        </div>
        <div className="shadow-xl px-2 py-2">
          <img src="/static/images/marvel-ironman.jpg" alt="marvel-ironman" />
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img src="/static/images/zootopia.jpg" alt="zootopia" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default ActionAdventure;
