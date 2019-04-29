import Slider from "react-slick";

const CaptainAmericaScreens = () => {
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
    <div className="mt-20">
      <div className="recommended  ml-2 mb-3">
        <h2 className="text-gray-500 mb-1 font-light">Screens</h2>
      </div>
      <Slider {...settings}>
        <div className="shadow-xl px-2 py-2">
          <img
            src="/static/extras/captain-marvel/extra00.jpg"
            alt="avengers_infinity_war"
          />
        </div>
        <div className="shadow-xl px-2 py-2">
          <a>
            <img
              src="/static/extras/captain-marvel/extra06.jpg"
              alt="snow_white"
            />
          </a>
        </div>

        <div className="shadow-xl px-2 py-2">
          <a>
            <img
              src="/static/extras/captain-marvel/extra02.jpg"
              alt="spiderman-homecoming"
            />
          </a>
        </div>
        <div className="shadow-xl px-2 py-2">
          <a>
            <img
              src="/static/extras/captain-marvel/extra01.jpg"
              alt="star_wars_a_new_hope"
            />
          </a>
        </div>
        <div className="shadow-xl px-2 py-2">
          <a>
            <img
              src="/static/extras/captain-marvel/extra03.jpg"
              alt="snow_white"
            />
          </a>
        </div>
        <div className="shadow-xl px-2 py-2">
          <a>
            <img
              src="/static/extras/captain-marvel/extra04.jpg"
              alt="snow_white"
            />
          </a>
        </div>
        <div className="shadow-xl px-2 py-2">
          <a>
            <img
              src="/static/extras/captain-marvel/extra05.jpg"
              alt="snow_white"
            />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default CaptainAmericaScreens;
