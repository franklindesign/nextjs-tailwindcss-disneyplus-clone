import Layout from "../components/Layout";

const Movies = () => (
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
            <ul className="md:flex font-semibold hidden">
              <li>
                <span>Featured</span>
              </li>
              <li>
                <span>A-Z</span>
              </li>
              <li>
                <span>Originals</span>
              </li>
              <li>
                <span>Action/Adventure</span>
              </li>
              <li>
                <span>Comedy</span>
              </li>
              <li>
                <span>SciFi/Fantasy</span>
              </li>
              <li>
                <span>Shorts</span>
              </li>
              <li>
                <span>Kids</span>
              </li>
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
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Movies;
