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
            <div className="mt-5">
              <a
                onClick={() => Router.push("/")}
                className="uppercase cursor-pointer"
              >
                ← Go back Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ErrorPage;
