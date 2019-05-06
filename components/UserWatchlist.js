import { watchList } from "../data/WatchList";

const UserWatchlist = () => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row lg:flex-row ">
      {watchList.map(w => (
        <div className="sm:w-1/1 md:w-1/2 lg:w-1/3  px-2 my-2" key={w.title}>
          <img src={w.image} alt={w.title} className="select" />
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
