import Router from "next/router";
import Slider from "react-slick";

const TrendingNow = () => {
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

  const trends = [
    { title: "Pixar Coco", src: "/static/images/pixar-coco.jpg", link: "/" },
    { title: "Bao", src: "/static/images/pixar-bao.jpg", link: "/" },
    { title: "Bambi", src: "/static/images/disney-bambi.jpg", link: "/" },
    { title: "Zootopia", src: "/static/images/zootopia.jpg", link: "/" },
    {
      title: "Black Panther",
      src: "/static/images/black_panther.jpg",
      link: "/Movies/BlackPanther"
    },
    { title: "Snow White", src: "/static/images/snow_white.jpg", link: "/" },
    {
      title: "Lady and The Tramp",
      src: "/static/originals/lady-and-the-tramp.jpg",
      link: "/"
    },
    {
      title: "The Mandalorian",
      src: "/static/originals/the-mandalorian.jpg",
      link: "/"
    }
  ];

  return (
    <div className="mb-16">
      <div className="recommended ml-2 mb-3">
        <h2 className="text-gray-500 mb-1 font-light">Trending Now</h2>
      </div>
      <Slider {...settings}>
        {trends.map(trending => (
          <div className="shadow-xl px-2 py-2 cursor-pointer">
            <img
              onClick={() => Router.push(`${trending.link}`)}
              src={trending.src}
              alt={trending.title}
              key={trending.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingNow;
