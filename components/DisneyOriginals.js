import Slider from "react-slick";
import { settings } from "./utils/SlideSettings";
import { originals } from "../data/DisneyOriginals";

const DisneyOriginals = () => {
  return (
    <div className="mb-16">
      <div className="recommended ml-2 mb-3">
        <h2 className="text-gray-500 mb-1 font-light">Disney+ Originals</h2>
      </div>
      <Slider {...settings}>
        {originals.map(o => (
          <div className="shadow-xl px-2 py-2 cursor-pointer" key={o.title}>
            <img src={o.src} alt={o.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DisneyOriginals;
