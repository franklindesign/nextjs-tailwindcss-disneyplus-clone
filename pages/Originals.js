import Layout from "../components/Layout";
import "../styles/originals.css";

const originalTitles = [
  {
    title: "High School Musical",
    src: "/static/originals/high-school-musical.jpg",
    link: "/"
  },
  {
    title: "Lady and The Tramp",
    src: "/static/originals/lady-and-the-tramp.jpg",
    link: "/"
  },
  {
    title: "The Mandalorian",
    src: "/static/originals/the-mandalorian.jpg",
    link: "/"
  },
  {
    title: "The World According to Jeff Goldblum",
    src: "/static/originals/the-world-according-to-jeff-goldblum.jpg",
    link: "/"
  },
  { title: "Encore", src: "/static/originals/encore.jpg", link: "/" },
  { title: "", src: "/static/originals/hero-project.jpg", link: "/" }
];

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
              {originalTitles.map(o => (
                <div className="sm:w-1/1 md:w-1/2 lg:w-1/3  px-2 my-2 ">
                  <img src={o.src} alt={o.title} className="select" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Originals;
