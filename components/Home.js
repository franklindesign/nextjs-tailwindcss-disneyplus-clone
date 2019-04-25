import HeroCarousel from "./Carousel";
import RecommendedCarousel from "./RecommendedCarousel";
import Categories from "./Categories";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../styles/carousel.css";
import "../styles/carousel.min.css";

import Canvas from "./Canvas";

const Home = () => {
  return (
    <div>
      <div className="my-12 pt-12">
        <HeroCarousel />
      </div>
      <div className="mb-12">
        <Categories />
      </div>
      <div className="recommended px-6 mb-12">
        <h2 className="text-gray-500 mb-1">Recommended For You</h2>
        <RecommendedCarousel />
      </div>
    </div>
  );
};

export default Home;
