import Layout from "../components/Layout";

const background = {
  root: {
    background: `url("../static/background/captain-marvel.jpg")`
  }
};

const CaptainMarvel = () => (
  <Layout>
    <div id="outer-container" className="flex text-white min-h-screen">
      <div id="page-wrap" className="w-full  ">
        <div className="mx-auto" style={background}>
          <div
            className="mt-10 pt-10"
            style={{
              backgroundImage: "url(../static/background/captain-marvel.jpg)",
              backgroundPosition: "center top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "800px"
            }}
          >
            <div className="mt-20">
              <img
                className="lg:ml-10 ml-2 mt-20 pt-10"
                src="../static/background/captain-marvel-logo.png"
                alt="captain-marvel-logo"
              />
            </div>
            <div className="flex">
              <button
                className="ml-10 uppercase sm:ml-20 playbutton"
                style={{
                  color: "black",
                  width: "120px",
                  padding: "10px",
                  backgroundColor: "white"
                }}
              >
                Play
              </button>
              <button
                className="uppercase font-thin text-xs"
                style={{
                  color: "white",
                  width: "200px",
                  padding: "10px",
                  backgroundColor: "rgba(0,0,0,.8)"
                }}
              >
                + Add to watchlist
              </button>
            </div>

            <p className="text-lg leading-relaxed mr-10 ml-10 md:ml-20 mt-10 xs:w-1/2    md:w-1/3 bg-black opacity-100 p-5">
              Marvel Studios' Captain Marvel is an adventure from a previously
              unseen period in the history of the Marvel Cinematic Universe that
              follows the journey of Carol Danvers as she becomes one of the
              universe's most powerful heroes.
            </p>
          </div>
          <div className="mt-16">
            <ul className="flex ml-20">
              <li className="pr-10">
                <span>EXTRAS</span>
              </li>
              <li className="px-10">
                <span>PREVIEWS</span>
              </li>
              <li className="px-10">
                <span>DETAILS</span>
              </li>
              <hr />
            </ul>
            <div className="flex ml-20 m-5">
              <img
                className="pr-3"
                src="../static/extras/captain-marvel/extra00.jpg"
                alt="Captain Marvel extra 1"
              />
              <img
                className="pr-3"
                src="../static/extras/captain-marvel/extra01.jpg"
                alt="Captain Marvel extra 1"
              />
              <img
                className="pr-3"
                src="../static/extras/captain-marvel/extra02.jpg"
                alt="Captain Marvel extra 1"
              />
              <img
                className="pr-3"
                src="../static/extras/captain-marvel/extra03.jpg"
                alt="Captain Marvel extra 1"
              />
            </div>
          </div>

          <style jsx>
            {`
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
