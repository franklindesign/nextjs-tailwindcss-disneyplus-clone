import CaptainMarvelScreens from "./Screens";
import Layout from "../../../components/Layout";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Extras", "Previews", "Details"];

const hero = {
  backgroundImage: "url(/static/background/captain-marvel.jpg)",
  backgroundPosition: "center top",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh"
};

const CaptainMarvel = () => (
  <Layout>
    <div id="outer-container" className="flex text-white min-h-screen">
      <div id="page-wrap" className="w-full  ">
        <div className="mx-auto">
          <div className="mt-10 pt-10 hero" style={hero}>
            <div className="logoReveal">
              <img
                className="lg:ml-10 ml-2 pt-40 mt-40 md:mt-20 md:pt-10"
                src="/static/background/captain-marvel-logo.png"
                alt="captain-marvel-logo"
              />
            </div>
            <div className="flex mt-10 sm:mt-20">
              <button className="w-1/2 md:w-1/5 text-black bg-white h-12 ml-10 uppercase sm:ml-20 hover:bg-blue-500 hover:text-white playbutton">
                Continue Watching
              </button>

              {/* <button
                className="ml-10 uppercase sm:ml-20 playbutton"
                style={{
                  color: "black",
                  width: "120px",
                  padding: "10px",
                  backgroundColor: "white"
                }}
              >
                Play
              </button> */}
              {/* <button
                className="uppercase font-thin text-xs"
                style={{
                  color: "white",
                  width: "200px",
                  padding: "10px",
                  backgroundColor: "rgba(0,0,0,.8)"
                }}
              >
                + Add to watchlist
              </button> */}
            </div>

            <p className="text-lg leading-relaxed mr-10 ml-10 md:ml-20 mt-10 xs:w-1/2    md:w-1/3 bg-black opacity-100 p-5">
              Marvel Studios' Captain Marvel is an adventure from a previously
              unseen period in the history of the Marvel Cinematic Universe that
              follows the journey of Carol Danvers as she becomes one of the
              universe's most powerful heroes.
            </p>
          </div>
          <div className="h-1 bg-blue-500 w-1/5 hidden lg:flex" />
          <div className="mt-20 px-5">
            <Dropdown
              options={options}
              placeholder="Select Section"
              className="sm:hidden mt-40"
            />
            <ul className="md:flex md:mx-10 font-semibold hidden  ">
              <li className="pr-10 cursor-pointer">
                <span>EXTRAS</span>
              </li>
              <li className="px-10 cursor-pointer">
                <span>PREVIEWS</span>
              </li>
              <li className="px-10 cursor-pointer">
                <span>DETAILS</span>
              </li>
              <hr />
            </ul>
            <CaptainMarvelScreens />
          </div>

          <style jsx>
            {`
              .hero {
                animation: scaledown 1.5s ease-out;
              }
              @keyframes scaledown {
                0% {
                  transform: scale(1.1);
                  opacity: 0;
                }
                100% {
                  transform: scale(1);
                  opacity: 1;
                }
              }
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
              .playbutton {
                transition: all 0.2s ease;
              }
              .playbutton:hover {
                transform: scale(1.1);
                cursor: pointer;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  </Layout>
);

export default CaptainMarvel;
