import Router from "next/router";

import Slider from "react-slick";

const TrendingNow = () => {
  const settings = {
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    focusOnSelect: true,
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
    <div className="mb-5">
      <div className="recommended ml-2 mb-3">
        <h2 className="text-gray-500 mb-1 font-light">Trending Now</h2>
      </div>
      <Slider {...settings}>
        <div className="shadow-xl px-2 py-2">
          <img src="/static/images/pixar-coco.jpg" alt="pixar-coco" />
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img src="/static/images/pixar-bao.jpg" alt="pixar-bao" />
          </a>
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img src="/static/images/disney-bambi.jpg" alt="disney-bambi" />
          </a>
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img src="/static/images/zootopia.jpg" alt="zootopia" />
          </a>
        </div>
        <div className="shadow-xl px-2 py-2">
          <img
            onClick={() => Router.push("/Movies/BlackPanther")}
            src="/static/images/black_panther.jpg"
            alt="black_panther"
          />
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img src="/static/images/snow_white.jpg" alt="snow_white" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default TrendingNow;
