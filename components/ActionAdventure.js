import Slider from "react-slick";
import { settings } from "../components/utils/SlideSettings";
import { titles } from "../data/ActionAdventure";

const ActionAdventure = () => {
  return (
    <div className="mb-16">
      <div className="recommended ml-2 mb-3">
        <h2 className="text-gray-500 mb-1 font-light">Action/Adventure</h2>
      </div>
      <Slider {...settings}>
        {titles.map(t => (
          <div className="shadow-xl px-2 py-2 cursor-pointer" key={t.title}>
            <img src={t.src} alt={t.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ActionAdventure;
