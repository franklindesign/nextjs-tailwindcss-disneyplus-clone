import Layout from "../components/Layout";
import Router from "next/router";

const UserProfile = () => (
  <Layout>
    <div id="outer-container" className="flex text-white min-h-screen">
      <div id="page-wrap" className="w-full">
        <div className="container mx-auto">
          <div className="pt-20 mt-20">
            <span
              className="text-5xl font-semibold"
              style={{ letterSpacing: ".15em" }}
            >
              Profile
            </span>

            <div className="mt-5 cursor-pointer">
              <a onClick={() => Router.push("/Settings")}>← Back to Settings</a>{" "}
            </div>

            <form className="w-full max-w-md text-gray-400 mt-10">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-black border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    value="Franklin"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    id="grid-last-name"
                    type="text"
                    value="Design"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    id="grid-password"
                    type="password"
                    value="**********"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    City
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    id="grid-city"
                    type="text"
                    value="Los Angeles"
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    State
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    id="grid-zip"
                    type="text"
                    value="California"
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    for="grid-zip"
                  >
                    Zip
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                    id="grid-zip"
                    type="text"
                    value="90210"
                  />
                </div>
              </div>
            </form>
            <button
              className="mt-8 mb-10 p-2 w-40  text-center text-white rounded"
              style={{ backgroundColor: "#279aff" }}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default UserProfile;
