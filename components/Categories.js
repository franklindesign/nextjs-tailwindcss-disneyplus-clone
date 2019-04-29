import Slider from "react-slick";

const Categories = () => {
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
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
        <div className="px-4 pb-6">
          <a className="bg-gray-800 h-32 flex justify-center items-center rounded-lg border border-gray-700 p-4 hover:bg-gray-700 shadow-custom">
            <img src="/static/logos/disney_logo.svg" alt="disney" />
          </a>
        </div>
        <div className=" px-4 pb-6">
          <a className="bg-gray-800 h-32 flex justify-center items-center rounded-lg border border-gray-700 p-4 hover:bg-gray-700 shadow-custom">
            <img src="/static/logos/pixar_logo.svg" alt="pixar_logo" />
          </a>
        </div>
        <div className=" px-4 pb-6">
          <a className="bg-gray-800 h-32 flex justify-center items-center rounded-lg border border-gray-700 p-4 hover:bg-gray-700 shadow-custom">
            <img src="/static/logos/marvel_logo_white.svg" alt="marvel_logo" />
          </a>
        </div>
        <div className=" px-4 pb-6">
          <a className="bg-gray-800 h-32 flex justify-center items-center rounded-lg border border-gray-700 p-4 hover:bg-gray-700 shadow-custom">
            <img src="/static/logos/star_wars_logo.svg" alt="star_wars_logo" />
          </a>
        </div>
        <div className="  px-4 pb-6">
          <a className="bg-gray-800 h-32 flex justify-center items-center rounded-lg border border-gray-700 p-4 hover:bg-gray-700 shadow-custom">
            <img
              src="/static/logos/national_geographic_logo.svg"
              alt="national_geographic_logo"
            />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Categories;
