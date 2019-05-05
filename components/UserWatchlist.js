const UserWatchlist = () => {
  const watchTitles = [
    {
      title: "The Mandalorian",
      image: "/static/originals/the-mandalorian.jpg",
      link: "/"
    },
    {
      title: "Lady and the Tramp",
      image: "/static/originals/lady-and-the-tramp.jpg",
      link: "/"
    },
    {
      title: "Hero Project",
      image: "/static/originals/hero-project.jpg",
      link: "/"
    },
    {
      title: "Encore",
      image: "/static/originals/encore.jpg",
      link: "/"
    },
    {
      title: "High School Musical",
      image: "/static/originals/high-school-musical.jpg",
      link: "/"
    },
    {
      title: "The World According to Jeff Goldblum",
      image: "/static/originals/the-world-according-to-jeff-goldblum.jpg",
      link: "/"
    }
  ];

  return (
    <div className="flex flex-wrap flex-col md:flex-row lg:flex-row ">
      {watchTitles.map(w => (
        <div className="sm:w-1/1 md:w-1/2 lg:w-1/3  px-2 my-2">
          <img src={w.image} alt={w.title} className="select" key={w.title} />
        </div>
      ))}
      <style jsx>{`
        .select {
          opacity: 0.75;
          transition: all 0.3s;
        }
        .select:hover {
          opacity: 1;
          transform: scale(1.05);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default UserWatchlist;
