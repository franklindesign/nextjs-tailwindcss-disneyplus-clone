import Sidebar from "../components/Sidebar";
import { push as Menu } from "react-burger-menu";
import Navbar from "./Navbar";

import DisneyFooter from "./DisneyFooter";
import Canvas from "./Canvas";
import "../styles/canvas.css";
import "../styles/disneynav.css";

const Layout = props => {
  return (
    <div>
      <Navbar />

      <Menu
        width={300}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <Sidebar />
      </Menu>

      <div>
        <div style={{ zIndex: 1 }}>{props.children}</div>

        <div>
          <Canvas style={{ maxWidth: "100%", maxHeight: "100vh" }} />
        </div>
      </div>

      <DisneyFooter />
    </div>
  );
};

export default Layout;
