import Router from "next/router";
import Slider from "react-slick";
import { settings } from "./utils/SlideSettings";
import { trending } from "../data/TrendingNow";

const TrendingNow = () => {
  return (
    <div className="mb-16">
      <div className="recommended ml-2 mb-3">
        <h2 className="text-gray-500 mb-1 font-light">Trending Now</h2>
      </div>
      <Slider {...settings}>
        {trending.map(t => (
          <div className="shadow-xl px-2 py-2 cursor-pointer" key={t.title}>
            <img
              onClick={() => Router.push(`${t.link}`)}
              src={t.src}
              alt={t.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingNow;
