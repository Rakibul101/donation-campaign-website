import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <p className="text-3xl text-red-500 font-semibold">Not found this URL</p>
      <Link to={"/"}>
        <button className="btn btn-accent mt-5 "> go home</button>
      </Link>
    </div>
  );
};

export default NotFound;
