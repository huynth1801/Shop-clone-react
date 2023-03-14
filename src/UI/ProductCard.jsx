import { IoAdd } from "react-icons/io5";
import "../styles/product-list.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="mb-2 mx-auto">
      <div className="product__item cursor-pointer">
        <div className="product__image hover:scale-110">
          <img src={item.imgUrl} alt="Product image" />
        </div>
        <div className="p-2">
          <h3 className="font-semibold text-xl mt-[15px] pb-2">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card-bottom flex items-center justify-between p-2">
          <span className="price">${item.price}</span>
          <span className="add hov">
            <IoAdd />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
