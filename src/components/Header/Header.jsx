import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="shadow-lg mb-10">
      <div className=" flex flex-col px-3 sm:flex-row items-center justify-between max-w-[1200px] mx-auto   py-3">
        <figure className="">
          <img
            className="sm:max-w-full w-[150px]"
            src="https://i.ibb.co/NVrB76n/Group-39461.png"
            alt=""
          />
        </figure>
        <ul className=" flex sm:justify-end justify-center items-center gap-3 mt-3 sm:mt-0 font-semibold text-lg list-none">
          {/* home page */}
          <li className="text-black ">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-black"
                  : isActive
                  ? " text-red-600 underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-black ">
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-black"
                  : isActive
                  ? " text-red-600 underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li className="text-black ">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-black"
                  : isActive
                  ? " text-red-600 underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
