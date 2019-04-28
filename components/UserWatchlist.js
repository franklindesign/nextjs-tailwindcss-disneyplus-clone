const UserWatchlist = () => {
  return (
    <>
      <div className="flex flex-wrap flex-col md:flex-row lg:flex-row ">
        <div className="sm:w-1/1 md:w-1/2 lg:w-1/3  px-2 my-2">
          <img
            src="/static/originals/the-mandalorian.jpg"
            alt="the-mandalorian"
            className="select"
          />
        </div>
        <div className="sm:w-1/1 md:w-1/2 lg:w-1/3  px-2 my-2">
          <img
            src="/static/originals/lady-and-the-tramp.jpg"
            alt="lady-and-the-tramp"
            className="select"
          />
        </div>
        <div className="sm:w-1/1 md:w-1/2 lg:w-1/3 px-2 my-2">
          <img
            src="/static/originals/hero-project.jpg"
            alt="hero-project"
            className="select"
          />
        </div>

        <div className="sm:w-1/1 md:w-1/2 lg:w-1/3  px-2 my-2">
          <img
            src="/static/originals/encore.jpg"
            alt="encore"
            className="select"
          />
        </div>
        <div className="sm:w-1/1 md:w-1/2 lg:w-1/3  px-2 my-2 ">
          <img
            src="/static/originals/high-school-musical.jpg"
            alt="high-school-musical"
            className="select"
          />
        </div>
        <div className="sm:w-1/1 md:w-1/2 lg:w-1/3  px-2 my-2">
          <img
            src="/static/originals/the-world-according-to-jeff-goldblum.jpg"
            alt="the-world-according-to-jeff-goldblum"
            className="select"
          />
        </div>
      </div>
    </>
  );
};

export default UserWatchlist;
