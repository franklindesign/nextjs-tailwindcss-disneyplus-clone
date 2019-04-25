import Link from "next/link";
import Slider from "react-slick";

const ContinueWatching = () => {
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
      <div className="recommended ml-2 mb-3">
        <h2 className="text-gray-500 mb-1 font-light">Continue Watching</h2>
      </div>
      <Slider {...settings}>
        <div className="shadow-xl px-2 py-2">
          <Link href="/CaptainMarvel">
            <img
              src="./static/images/marvel-captain-marvel.jpg"
              alt="marvel-captain-marvel"
            />
          </Link>
          <div className="h-1 bg-blue-500 w-12" />
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img src="./static/images/thor-ragnarok.jpg" alt="thor-ragnarok" />
          </a>
          <div className="h-1 bg-blue-500 w-4" />
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img
              src="./static/images/pixar-toy-story.jpg"
              alt="pixar-toy-story"
            />
          </a>
          <div className="h-1 bg-blue-500 w-5" />
        </div>

        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img
              src="./static/images/disney-lion-king.jpg"
              alt="disney-lion-king"
            />
          </a>
          <div className="h-1 bg-blue-500 w-16" />
        </div>
        <div className="shadow-xl px-2 py-2">
          <Link href="#">
            <a>
              <img src="./static/images/disney-mulan.jpg" alt="disney-mulan" />
              <div className="h-1 bg-blue-500 w-12" />
            </a>
          </Link>
        </div>
        <div className="shadow-xl px-2 py-2">
          <a href="#">
            <img src="./static/images/free-solo.jpg" alt="free-solo" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default ContinueWatching;
