import { useContext, useEffect, useRef, useState } from "react";
import { CardData } from "../../pages/Home/Home";
import { AllDataContext } from "../LayOut/LayOut";

const Banner = () => {
  // donation data  get =====================
  const data = useContext(AllDataContext);
  const [donationSearchText, setDonationSearchTex] = useState("");
  const [dropDown, setDropDown] = useState(false);
  // input value ====================
  const [input, setInput] = useState("");
  const searchRef = useRef();
  // donation update function =====================
  const donationUpdateFunc = useContext(CardData);

  //  update search text and filte=============
  const searchItemFilter =
    data &&
    data?.filter((item) =>
      item.category.toLowerCase().includes(donationSearchText)
    );
  // console.log(searchItemFilter);
  // input text update =============
  const hanldeInputText = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };
  // console.log(input);
  const handleSearch = (e) => {
    setDonationSearchTex(input.toLowerCase());
  };
  // update search reasult and show item =====
  useEffect(() => {
    donationUpdateFunc(searchItemFilter);
  }, [donationSearchText]);
  // ===============handleDropDownSearch================

  return (
    <div className="mm-bg bg-gray-200 bg-[url(https://media.istockphoto.com/id/1443245439/photo/business-meeting-businesswoman-woman-office-portrait-job-career-happy-businessman-teamwork.webp?b=1&s=612x612&w=0&k=20&c=zQxhQVNtR7T9qdOtQo72zS4zb0I4yqdmUiC9xI2wLyw=)]   bg-blend-overlay   bg-cover bg-center md:h-[500px]  h-[350px]   mb-8 z-0 flex flex-col justify-center items-center p-4 ">
      {/* search title container  */}
      <div>
        <h2 className="md:text-5xl text-3xl font-bold my-5 text-center">
          I Grow By Helping People In Need
        </h2>
      </div>
      {/* search input fild  */}
      <div
        className="flex justify-center rounded-md  bg-white
       w-10/12 md:w-7/12"
      >
        <input
          // onKeyUp={handleSearch}
          onKeyUp={hanldeInputText}
          ref={searchRef}
          className="block outline-none bg-white p-1 w-full text-lg px-3 rounded-md "
          type="text"
          placeholder="Search here"
          name="text"
          id=""
        />
        <button
          onClick={() => handleSearch()}
          className="btn btn-error rounded-r-md rounded-none text-white "
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Banner;
