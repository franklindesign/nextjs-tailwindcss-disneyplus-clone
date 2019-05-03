import HeroCarousel from "./Carousel";
import RecommendedCarousel from "./RecommendedCarousel";
import ContinueWatching from "./ContinueWatching";
import DisneyOriginals from "./DisneyOriginals";
import TrendingNow from "./TrendingNow";
import Categories from "./Categories";
import "../styles/slick.css";
import "../styles/carousel.css";
import "../styles/carousel.min.css";
import "../styles/slides.css";

import ActionAdventure from "./ActionAdventure";

const Home = () => {
  return (
    <div className="mb-20">
      <div className="my-12 pt-12">
        <HeroCarousel />
      </div>
      <div className="mb-12">
        <Categories />
      </div>
      <RecommendedCarousel />
      <ContinueWatching />
      <DisneyOriginals />
      <TrendingNow />
      <ActionAdventure />
    </div>
  );
};

export default Home;
