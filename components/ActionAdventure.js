import Slider from "react-slick";

const ActionAdventure = () => {
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
  const titles = [
    {
      title: "Star Wars: Return of the Jedi",
      src: "/static/images/starwars-returnofthejedi.jpg",
      link: "/"
    },
    { title: "Tarzan", src: "/static/images/disney-tarzan.jpg", link: "/" },
    {
      title: "Guardian's of the Galaxy",
      src: "/static/images/marvel-guardians-of-the-galaxy.jpg",
      link: "/"
    },
    {
      title: "The Incredibles",
      src: "/static/images/pixar-incredibles.jpg",
      link: "/"
    },
    { title: "Ironman", src: "/static/images/marvel-ironman.jpg", link: "/" },
    { title: "Zootopia", src: "/static/images/zootopia.jpg", link: "/" }
  ];

  return (
    <div className="mb-16">
      <div className="recommended ml-2 mb-3">
        <h2 className="text-gray-500 mb-1 font-light">Action/Adventure</h2>
      </div>
      <Slider {...settings}>
        {titles.map(t => (
          <div className="shadow-xl px-2 py-2 cursor-pointer">
            <img src={t.src} alt={t.title} key={t.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ActionAdventure;
