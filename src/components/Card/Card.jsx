import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const {
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_color,
    btn_bg,
    id,
  } = item || {};
  const detailsNaviget = useNavigate();
  const handleDetailsPage = () => {
    // console.log(detailsNaviget);
    detailsNaviget(`/carddetails/${id}`);
  };
  return (
    <div
      onClick={handleDetailsPage}
      style={{
        background: `${card_bg}`,
      }}
      className="flex flex-col gap-3  shadow-lg rounded-xl overflow-hidden cursor-pointer"
    >
      <figure className="h-[200px]">
        <img className=" w-full h-full object-cover" src={picture} alt="" />
      </figure>
      <div className="p-4">
        <div>
          <button
            style={{
              background: `${btn_bg}`,
              color: `${text_color}`,
            }}
            className="btn border-0 outline-none text-lg"
          >
            {category}
          </button>
        </div>
        <h3
          style={{
            color: `${text_color}`,
          }}
          className="text-3xl my-4"
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
