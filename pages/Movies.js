import Sidebar from "../components/Sidebar";
import { push as Menu } from "react-burger-menu";

import "../styles/index.css";

const Movies = () => (
  <div
    id="outer-container"
    className="flex bg-gray-900 text-white min-h-screen"
  >
    <div>
      <Menu
        width={300}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <Sidebar />
      </Menu>
    </div>
    <div id="page-wrap" className="w-full">
      <div className="container mx-auto">Movies</div>
    </div>
  </div>
);

export default Movies;
