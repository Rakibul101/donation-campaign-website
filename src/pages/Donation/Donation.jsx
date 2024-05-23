import { useEffect, useState } from "react";
import DonationPageCard from "../../components/DonationPageCard/DonationPageCard";

const Donation = () => {
  const [data, setData] = useState();
  const [arrCheker, setArrCheker] = useState(false);
  useEffect(() => {
    const getLsData = JSON.parse(localStorage.getItem("donationRakib"));
    setData(getLsData);
  }, []);
  // console.log(data.length);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {arrCheker
          ? data &&
            data.map((item) => (
              <DonationPageCard key={item.id} item={item}></DonationPageCard>
            ))
          : data
              ?.slice(0, 4)
              .map((item) => (
                <DonationPageCard key={item.id} item={item}></DonationPageCard>
              ))}
      </div>
      {/* item lenth cheker button  */}
      <div
        className={` ${data?.length > 4 ? "block" : "hidden"} ${
          arrCheker ? "hidden" : ""
        }
       flex justify-center p-8`}
      >
        <button onClick={() => setArrCheker(true)} className="btn btn-accent">
          See More
        </button>
      </div>
    </div>
  );
};

export default Donation;
