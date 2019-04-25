import Home from "../components/Home";

import "../styles/index.css";
import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <div id="outer-container" className="flex text-white min-h-screen">
      <div id="page-wrap" className="w-full">
        <div className="container mx-auto">
          <Home />
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
