import Layout from "../components/Layout";
import Router from "next/router";

const Settings = () => (
  <Layout>
    <div id="outer-container" className="flex text-white min-h-screen">
      <div id="page-wrap" className="w-full">
        <div className="container mx-auto">
          <div className="pt-20 mt-20">
            <span
              className="text-5xl font-semibold"
              style={{ letterSpacing: ".15em" }}
            >
              Settings
            </span>
            <div>
              <ul className="text-xl mt-10">
                <li className="mt-4 cursor-pointer">
                  <a onClick={() => Router.push("/UserProfile")}>Profile</a>
                </li>
                <li className="mt-4 cursor-pointer">
                  <a href="#">Billing Information</a>
                </li>
                <li className="mt-4 cursor-pointer">
                  <a href="#">Manage Devices</a>
                </li>
                <li className="mt-4 cursor-pointer">
                  <a href="#">Parental Controls</a>
                </li>
                <li className="mt-4">
                  <a href="#">Video Playback</a>
                </li>
                <li className="mt-4">
                  <a href="#">Notifications</a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="text-xl mt-10">
                <li className="mt-4">
                  <a href="#">Help</a>
                </li>
                <li className="mt-4">
                  <a href="#">Privacy</a>
                </li>
                <li className="mt-4">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
              <button className="mt-8 mb-10 p-2 w-40  text-center text-black  bg-white rounded">
                Sign Out
              </button>
            </div>
            <p className="text-sm mt-10">Version 0.0.0.1</p>
          </div>
          <div className="mt-5" />
        </div>
      </div>
    </div>
  </Layout>
);

export default Settings;
