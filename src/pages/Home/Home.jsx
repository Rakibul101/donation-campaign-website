import { createContext, useContext, useEffect, useState } from "react";
import { AllDataContext } from "../../components/LayOut/LayOut";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
export const CardData = createContext([]);
const Home = () => {
  // get all data
  const data = useContext(AllDataContext);
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    setAllData(data);
  }, [data]);
  return (
    <div>
      <CardData.Provider value={setAllData}>
        <Banner></Banner>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
         "
        >
          {allData?.length > 0 &&
            allData?.map((item) => <Card key={item.id} item={item}></Card>)}
        </div>
      </CardData.Provider>
    </div>
  );
};

export default Home;
