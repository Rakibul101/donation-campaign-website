const DonationPageCard = ({ item }) => {
  const {
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_color,
    btn_bg,
    id,
    price,
  } = item || {};
  return (
    <div
      style={{
        background: `${card_bg}`,
      }}
      className="flex sm:flex-row flex-col shadow-md"
    >
      {/* card banner section */}
      <div>
        <figure className="md:w-[250px] w-full">
          <img
            className="block w-full h-full object-cover "
            src={picture}
            alt=""
          />
        </figure>
      </div>
      {/* card details section  */}
      <div className="rounded-md  flex flex-col gap-3 p-4 ">
        <div>
          <button
            style={{
              background: `${btn_bg}`,
              color: `${text_color}`,
            }}
            className="btn btn-sm border-0 outline-0"
          >
            {" "}
            {category}
          </button>
        </div>
        <h2 className="text-2xl font-semibold ">{title}</h2>
        <p
          style={{
            color: `${text_color}`,
          }}
          className="text-lg font-semibold"
        >
          {price}
        </p>
        <div>
          <button
            style={{
              background: `${text_color}`,
            }}
            className="btn text-xl text-white border-0 outline-0"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationPageCard;
