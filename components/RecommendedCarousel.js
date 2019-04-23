import Link from "next/link";
import Slider from "react-slick";

const RecommendedCarousel = () => {
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
      <Slider {...settings}>
        <div className="shadow-xl px-2 py-2">
          <Link href="#">
            <img
              src="./static/images/avengers_infinity_war.jpg"
              alt="avengers_infinity_war"
            />
          </Link>
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img
              src="./static/images/star_wars_a_new_hope.jpg"
              alt="star_wars_a_new_hope"
            />
          </a>
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img src="./static/images/cinderella.jpg" alt="cinderella" />
          </a>
        </div>

        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img src="./static/images/snow_white.jpg" alt="snow_white" />
          </a>
        </div>
        <div className="shadow-xl px-2 py-2">
          <Link href="/blackPanther">
            <img src="./static/images/black_panther.jpg" alt="black_panther" />
          </Link>
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img src="./static/images/zootopia.jpg" alt="zootopia" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default RecommendedCarousel;
