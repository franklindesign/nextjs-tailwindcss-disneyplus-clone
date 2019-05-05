import Slider from "react-slick";

const DisneyOriginals = () => {
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

  const originals = [
    {
      title: "High School Musical",
      src: "/static/originals/high-school-musical.jpg",
      link: "/"
    },
    {
      title: "Lady and The Tramp",
      src: "/static/originals/lady-and-the-tramp.jpg",
      link: "/"
    },
    {
      title: "The Mandalorian",
      src: "/static/originals/the-mandalorian.jpg",
      link: "/"
    },
    {
      title: "The World According to Jeff Goldblum",
      src: "/static/originals/the-world-according-to-jeff-goldblum.jpg",
      link: "/"
    },
    { title: "Encore", src: "/static/originals/encore.jpg", link: "/" },
    { title: "", src: "/static/originals/hero-project.jpg", link: "/" }
  ];
  return (
    <div className="mb-16">
      <div className="recommended ml-2 mb-3">
        <h2 className="text-gray-500 mb-1 font-light">Disney+ Originals</h2>
      </div>
      <Slider {...settings}>
        {originals.map(o => (
          <div className="shadow-xl px-2 py-2 cursor-pointer">
            <img src={o.src} alt={o.title} key={o.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DisneyOriginals;
