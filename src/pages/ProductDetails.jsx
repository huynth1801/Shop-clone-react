import { useParams } from "react-router";
import products from "../assets/data/product";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../UI/CommonSection";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { useState } from "react";
import "../styles/product-detail.css";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
  } = product;
  return (
    <Helmet>
      <CommonSection />
      <section>
        <div>
          <div className="grid grid-rows-1 md:grid md:grid-cols-2  items-center mx-2">
            <img src={imgUrl} alt="" className="rounded-lg md:pl-8" />
            <div className="pl-8 md:pl-0f">
              <div className="product__details">
                <h2 className="text-xl">{productName}</h2>
                <div className="product__rating py-4">
                  <div className="flex md:items-center">
                    <span className="pr-2">
                      <BsStarFill className="text-yellow-500" />
                    </span>
                    <span className="pr-2">
                      <BsStarFill className="text-yellow-500" />
                    </span>
                    <span className="pr-2">
                      <BsStarFill className="text-yellow-500" />
                    </span>
                    <span className="pr-2">
                      <BsStarFill className="text-yellow-500" />
                    </span>
                    <span className="pr-2">
                      <BsStarHalf className="text-yellow-500" />
                    </span>
                  </div>

                  <p className="font-thin py-2">
                    <span className="text-yellow-500">({avgRating}</span>{" "}
                    ratings)
                  </p>
                </div>

                <span className="text-2xl ">${price}</span>
                <p className="font-thin text-zinc-400">{shortDesc}</p>

                <button
                  className="buy__btn border border-solid 
                                  py-2 px-4 rounded bg-black 
                                  text-white mt-8 hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <div className="grid grid-cols-1 mt-4 ml-4 pl-8">
              <div className="tab__wrapper flex items-center gap-5 ">
                <div
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </div>
                <div
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Reviews ({reviews.length})
                </div>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div>reviews</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
