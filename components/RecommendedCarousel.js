import Slider from "react-slick";

const RecommendedCarousel = () => {
  const settings = {
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 5,
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

  const recommended = [
    {
      title: "Avenger's Infinity War",
      src: "/static/images/avengers_infinity_war.jpg"
    },
    {
      title: "Star Wars A New Hope",
      src: "/static/images/star_wars_a_new_hope.jpg"
    },
    {
      title: "Spiderman: Homecoming",
      src: "/static/images/spiderman-homecoming.jpg"
    },
    { title: "Snow White", src: "/static/images/snow_white.jpg" },
    { title: "One Strange Rock", src: "/static/images/one_strange_rock.jpg" },
    { title: "Zootopia", src: "/static/images/zootopia.jpg" }
  ];

  return (
    <div className="mt-10 mb-16">
      <div className="ml-2 mb-3">
        <h2 className="text-gray-500 mb-1 font-light">Recommended For You</h2>
      </div>
      <Slider {...settings}>
        {recommended.map(rec => (
          <div className="shadow-xl px-2 py-2 cursor-pointer">
            <img src={rec.src} alt={rec.title} key={rec.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecommendedCarousel;
