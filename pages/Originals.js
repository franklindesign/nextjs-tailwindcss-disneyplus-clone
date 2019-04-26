import Layout from "../components/Layout";
import "../styles/originals.css";

const Originals = () => (
  <Layout>
    <div id="outer-container" className="flex   text-white min-h-screen">
      <div id="page-wrap" className="w-full">
        <div className="container mx-auto mb-10 pb-10">
          <div className="pt-20 mt-20">
            <div className=" flex mx-auto justify-center">
              <div className="flex flex-col mx-auto justify-center">
                <img
                  src="/static/logos/disneyplus_logo.svg"
                  alt="disneyplus_logo"
                  width="200px"
                />
                <div className="title text-xs font-semibold uppercase ml-8 mb-10 pb-5">
                  Originals
                </div>
              </div>
            </div>
            <div className="flex flex-wrap flex-col md:flex-row lg:flex-row ">
              <div className="sm:w-1/1 md:w-1/2 lg:w-1/3  px-2 my-2">
                <img
                  src="/static/originals/the-mandalorian.jpg"
                  alt="the-mandalorian"
                  className="select"
                />
              </div>
              <div className="sm:w-1/1 md:w-1/2 lg:w-1/3  px-2 my-2">
                <img
                  src="/static/originals/lady-and-the-tramp.jpg"
                  alt="lady-and-the-tramp"
                  className="select"
                />
              </div>
              <div className="sm:w-1/1 md:w-1/2 lg:w-1/3 px-2 my-2">
                <img
                  src="/static/originals/hero-project.jpg"
                  alt="hero-project"
                  className="select"
                />
              </div>

              <div className="sm:w-1/1 md:w-1/2 lg:w-1/3  px-2 my-2">
                <img
                  src="/static/originals/encore.jpg"
                  alt="encore"
                  className="select"
                />
              </div>
              <div className="sm:w-1/1 md:w-1/2 lg:w-1/3  px-2 my-2 ">
                <img
                  src="/static/originals/high-school-musical.jpg"
                  alt="high-school-musical"
                  className="select"
                />
              </div>
              <div className="sm:w-1/1 md:w-1/2 lg:w-1/3  px-2 my-2">
                <img
                  src="/static/originals/the-world-according-to-jeff-goldblum.jpg"
                  alt="the-world-according-to-jeff-goldblum"
                  className="select"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Originals;
