import Router from "next/router";
import Slider from "react-slick";

const ContinueWatching = () => {
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

  const keepWatching = [
    {
      title: "Captain Marvel",
      src: "/static/images/marvel-captain-marvel.jpg",
      link: "/Movies/CaptainMarvel",
      length: "12"
    },
    {
      title: "Thor: Ragnarok",
      src: "/static/images/thor-ragnarok.jpg",
      link: "/",
      length: "4"
    },
    {
      title: "Toy Story",
      src: "/static/images/pixar-toy-story.jpg",
      link: "/",
      length: "5"
    },
    {
      title: "Lion King",
      src: "/static/images/disney-lion-king.jpg",
      link: "/",
      length: "4"
    },
    {
      title: "Mulan",
      src: "/static/images/disney-mulan.jpg",
      link: "/",
      length: "12"
    },
    {
      title: "Free Solo",
      src: "/static/images/free-solo.jpg",
      link: "/",
      length: "12"
    }
  ];

  return (
    <div className="mb-16">
      <div className="recommended ml-2 mt-5">
        <h2 className="text-gray-500 mb-1 font-light">Continue Watching</h2>
      </div>
      <Slider {...settings}>
        {keepWatching.map(watching => (
          <div className="shadow-xl px-2 py-2 cursor-pointer">
            <img
              onClick={() => Router.push(`${watching.link}`)}
              src={watching.src}
              alt={watching.title}
              key={watching.title}
            />
            <div className="h-1 bg-blue-500 w-1/3" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ContinueWatching;
