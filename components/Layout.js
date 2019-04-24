import Sidebar from "../components/Sidebar";
import { push as Menu } from "react-burger-menu";
import Navbar from "./Navbar";
import DisneyFooter from "./DisneyFooter";

import Canvas from "./Canvas";

const Layout = props => {
  return (
    <div>
      <Navbar />
      <Canvas style={{ maxWidth: "100%", maxHeight: "100vh" }} />
      <Menu
        width={300}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <Sidebar />
      </Menu>

      <div>{props.children}</div>

      <DisneyFooter />
    </div>
  );
};

export default Layout;
