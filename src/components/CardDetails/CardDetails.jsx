import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CardDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const data = useLoaderData();
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState({});
  //   loader data update
  useEffect(() => {
    setAllData(data);
  }, [data]);
  // /filter data update
  useEffect(() => {
    const dataFilter =
      allData && allData?.find((data) => data.id === parseInt(id));
    setFilterData(dataFilter);
  }, [id, allData]);
  // console.log(filterData);
  const {
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_color,
    btn_bg,
    price,
    description,
  } = filterData || {};
  const getItem = () => {
    const getitem = JSON.parse(localStorage.getItem("donationRakib"));
    if (getitem) {
      return getitem;
    }
    return [];
  };
  const handleCardSave = () => {
    const getItemLs = getItem();
    const itemCheker = getItemLs.find((item) => item.id == id);
    // console.log(itemCheker);
    if (!itemCheker) {
      getItemLs.push(filterData);
      const saveItem = localStorage.setItem(
        "donationRakib",
        JSON.stringify([...getItemLs])
      );
      // console.log("itemCheker");
      toast.success("Your Donation Sucessful");
    } else {
      toast.error("You Allready Donation This item");
    }
  };
  return (
    <div
      style={{
        background: `${card_bg}`,
      }}
      className="max-w-[800px] mx-auto flex flex-col rounded-xl overflow-hidden"
    >
      <ToastContainer></ToastContainer>
      <div className=" h-[300px] sm:h-[400px]  object-cover overflow-hidden relative w-full">
        <figure className="flex justify-center items-center">
          <img className="w-full   object-cover block " src={picture} alt="" />
        </figure>
        <div className="w-full p-4 px-6 bg-black absolute bottom-0 bg-opacity-50">
          <button
            onClick={handleCardSave}
            style={{
              background: `${text_color}`,
            }}
            className="btn text-white font-semibold text-lg border-0 outline-0"
          >
            ${price}
          </button>
        </div>
      </div>
      <div className="p-4 ">
        <h1 className="text-3xl font-bold my-4">{title}</h1>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
