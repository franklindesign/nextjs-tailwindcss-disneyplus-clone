import Layout from "../components/Layout";
import RecommendedCarousel from "../components/RecommendedCarousel";
import TrendingNow from "../components/TrendingNow";
import DisneyOriginals from "../components/DisneyOriginals";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState } from "react";

const Movies = () => {
  const [categories] = useState([
    "Featured",
    "A-Z",
    "Originals",
    "Action/Adventure",
    "Comedy",
    "SciFi/Fantasy",
    "Shorts",
    "Kids"
  ]);

  return (
    <Layout>
      <div id="outer-container" className="flex text-white min-h-screen">
        <div id="page-wrap" className="w-full">
          <div className="container mx-auto">
            <div className="pt-20 mt-20">
              <span
                className="text-5xl font-semibold"
                style={{ letterSpacing: ".15em" }}
              >
                Movies
              </span>
            </div>
            <div className="mt-5">
              <Dropdown
                options={categories}
                placeholder="Select movie category"
                className="sm:hidden"
              />

              <ul className="md:flex font-semibold hidden">
                {categories.map(category => (
                  <li key={category}>
                    <span className="cursor-pointer">{category}</span>
                  </li>
                ))}
              </ul>
              <style jsx>{`
                span:hover {
                  padding-bottom: 0.6em;
                  color: white;
                  border-bottom: 3px solid white;
                }
                li {
                  padding-bottom: 0.5em;
                  padding-right: 3em;

                  color: rgb(179, 179, 179);
                }

                ul {
                  border-bottom: 1px solid rgb(211, 211, 211);
                }
              `}</style>
              <RecommendedCarousel />
              <TrendingNow />
              <DisneyOriginals />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Movies;
