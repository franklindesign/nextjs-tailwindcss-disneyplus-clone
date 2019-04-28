import Layout from "../components/Layout";
import Router from "next/router";

const ErrorPage = () => (
  <Layout>
    <div id="outer-container" className="flex text-white min-h-screen">
      <div id="page-wrap" className="w-full">
        <div className="container mx-auto">
          <div className="pt-20 mt-20">
            <span
              className="text-5xl font-semibold"
              style={{ letterSpacing: ".15em" }}
            >
              Oops...
            </span>
            <p>Looks like you are in the wrong page.</p>
            <a
              onClick={() => Router.push("/Home")}
              className="mt-4 uppercase cursor-pointer"
            >
              Go back Home
            </a>
          </div>
          <div className="mt-5">
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

export default ErrorPage;
