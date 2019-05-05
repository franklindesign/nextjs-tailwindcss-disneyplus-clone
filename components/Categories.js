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

  const companies = [
    { name: "Disney", src: "/static/logos/disney_logo.svg", link: "/" },
    { name: "Pixar", src: "/static/logos/pixar_logo.svg", link: "/" },
    { name: "Marvel", src: "/static/logos/marvel_logo_white.svg", link: "/" },
    { name: "Star Wars", src: "/static/logos/star_wars_logo.svg", link: "/" },
    {
      name: "National Geographic",
      src: "/static/logos/national_geographic_logo.svg",
      link: "/"
    }
  ];

  return (
    <div>
      <Slider {...settings}>
        {companies.map(c => (
          <div className="px-4 pb-6">
            <a className="bg-gray-800 h-32 flex justify-center items-center rounded-lg border border-gray-700 p-4 hover:bg-gray-700 shadow-custom cursor-pointer">
              <img src={c.src} alt={c.name} key={c.name} />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
