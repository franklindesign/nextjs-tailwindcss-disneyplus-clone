import Slider from "react-slick";
import { settings } from "../components/utils/CategorySlideSettings";
import { companies } from "../data/Companies";

const Categories = () => {
  return (
    <div>
      <Slider {...settings}>
        {companies.map(c => (
          <div className="px-4 pb-6" key={c.id}>
            <a className="bg-gray-800 h-32 flex justify-center items-center rounded-lg border border-gray-700 p-4 hover:bg-gray-700 shadow-custom cursor-pointer">
              <img src={c.src} alt={c.name} />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
