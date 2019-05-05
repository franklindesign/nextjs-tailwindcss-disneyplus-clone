import "../styles/disneynav.css";

const disneylogo = "/static/logos/disneyplus_logo.svg";

const Navbar = () => {
  return (
    <nav className="disney-nav flex justify-center mx-auto bg-gray-800 min-h-12 py-2">
      <img src={disneylogo} alt="disneyplus_logo" />
    </nav>
  );
};

export default Navbar;
