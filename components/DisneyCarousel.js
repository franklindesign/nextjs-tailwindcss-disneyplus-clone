import Router from "next/router";
import Slider from "react-slick";

const DisneyCarousel = () => {
  const settings = {
    infinite: false,
    arrows: true,
    className: "slides",
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

  const titles = [
    {
      title: "Avengers: Infinity War",
      src: "/static/images/avengers_infinity_war.jpg",
      link: "/"
    },
    {
      title: "Star Wars A New Hope",
      src: "/static/images/star_wars_a_new_hope.jpg",
      link: "/"
    },
    {
      title: "Cinderella",
      src: "/static/images/cinderella.jpg",
      link: "/"
    },
    {
      title: "Snow White",
      src: "/static/images/snow_white.jpg",
      link: "/"
    },
    {
      title: "Black Panther",
      src: "/static/images/black_panther.jpg",
      link: "/"
    },
    { title: "Zootopia", src: "/static/images/zootopia.jpg", link: "/" }
  ];

  return (
    <div>
      <div className="recommended ml-2 mb-3">
        <h2 className="text-gray-500 mb-1 font-light">Disney</h2>
      </div>
      <Slider {...settings}>
        {titles.map(title => (
          <div className="shadow-xl px-2 py-2 cursor-pointer" key={title.title}>
            <img src={title.src} alt={title.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DisneyCarousel;
