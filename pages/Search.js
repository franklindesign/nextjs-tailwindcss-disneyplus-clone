import Layout from "../components/Layout";
import RecommendedCarousel from "../components/RecommendedCarousel";

const Search = () => (
  <Layout>
    <div id="outer-container" className="flex text-white min-h-screen">
      <div id="page-wrap" className="w-full">
        <div className="container mx-auto">
          <div className="pt-20 mt-20">
            <span
              className="text-5xl font-semibold"
              style={{ letterSpacing: ".15em" }}
            >
              Search
            </span>
          </div>
          <div className="mt-5">
            <input
              placeholder="Search series or movies"
              type="text"
              className="text-black p-3 md:w-1/2 w-full"
            />
          </div>
          <RecommendedCarousel />
        </div>
      </div>
    </div>
  </Layout>
);

export default Search;
