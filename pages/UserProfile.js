import Layout from "../components/Layout";

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
            <div>
              <ul className="text-xl mt-10">
                <li className="mt-4">First Name: Franklin</li>
                <li className="mt-4">Last Name: Design</li>
                <li className="mt-4">Email Address: user@gmail.com</li>
                <li className="mt-4">Password: **********</li>
                <li className="mt-4">ZIP Code: 90001</li>
                <li className="mt-4">Phone Number: 213-555-5555</li>
              </ul>
            </div>
            <button className="mt-10 p-2 bg-white text-black">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default UserProfile;
