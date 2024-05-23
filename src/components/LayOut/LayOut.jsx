import { Outlet, createBrowserRouter, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { createContext, useEffect, useState } from "react";

export const AllDataContext = createContext([]);
const LayOut = () => {
  const data = useLoaderData();
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    setAllData(data);
  }, [data]);
  // console.log(allData);

  return (
    <div>
      <AllDataContext.Provider value={allData}>
        <Header></Header>
        <div className="max-w-[1200px] mx-auto px-3">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </AllDataContext.Provider>
    </div>
  );
};

export default LayOut;
