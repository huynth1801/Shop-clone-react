import Helmet from "../components/Helmet/Helmet.jsx";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero-img.png";
import product from "../assets/data/product.js";
import Services from "../services/Services.jsx";
import ProductLists from "../UI/ProductLists.jsx";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../UI/Clock.jsx";
import { useEffect, useState } from "react";
import BackToTopButton from "../components/BackToTopButton.jsx";

const Home = () => {
  // Get Data
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProduct = product.filter(
      (item) => item.category === "chair"
    );
    const filteredBestProduct = product.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = product.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProduct = product.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = product.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProduct);
    setBestProducts(filteredBestProduct);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProduct);
    setPopularProducts(filteredPopularProducts);
  }, []);
  // Get year
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero__section md:h-[500px]">
        <div className="container px-4">
          <div className="flex items-center  px-4 flex-col md:flex-row">
            <div className="flex items-center">
              <div className="hero__content px-4">
                <p className="text-medium py-4">Trending product in {year}</p>
                <h2 className="text-4xl py-2">
                  Make Your Interior More Minimalistic & Modern
                </h2>
                <p className="py-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos, dolore dolores. Non placeat, eveniet hic earum
                  facere totam repellat ipsam suscipit odio beatae. A cumque
                  ducimus fuga voluptatem eum magni.
                </p>
                <button className="buy__btn py-2 mt-4 md:mt-8 px-[20px] text-white bg-black rounded-lg">
                  <Link to="/shop">Shop Now</Link>
                </button>
              </div>
            </div>
            <div className="mt-4 md:w-full">
              <div className="hero__img">
                <img src={heroImg} alt="hero image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <section className="trending__product mx-auto">
        <div>
          <div className="text-center text-2xl font-semibold py-4 ">
            <h2 className="text-center">Trending Products</h2>
          </div>
          <ProductLists data={trendingProducts} />
        </div>
      </section>
      <section className="best__sales mx-auto">
        <div>
          <div className="text-center text-2xl font-semibold py-4">
            <h2>Best Sales</h2>
          </div>
          <ProductLists data={bestProducts} />
        </div>
      </section>
      <section className="time__counter md:h-[400px]">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center text-white">
          <div className="flex flex-col mx-auto">
            <div className="clock__top-content ">
              <h4 className="text-4xl font-semibold mt-8 md:mb-2 md:mt-2">
                Limited Offers
              </h4>
              <h3 className="text-3xl font-medium mb-4">Quality Armchair</h3>
            </div>
            <Clock />
            <div className="buy__btn py-4">
              <button className="bg-slate-50 text-black py-2 px-4 rounded-sm font-medium hover:bg-red-500 hover:text-white">
                <Link to={"/shop"}>Visit Store</Link>
              </button>
            </div>
          </div>
          <div className="">
            <img
              src={counterImg}
              alt="product sale image"
              className="md:w-8/12 md:h-8/12 object-contain"
            />
          </div>
        </div>
      </section>
      <section className="m-8">
        <div>
          <div className="text-center text-2xl font-semibold py-4">
            <h2>New Arrivals</h2>
          </div>

          <ProductLists data={mobileProducts} />
          <ProductLists data={wirelessProducts} />
        </div>
      </section>
      <section className="m-8">
        <div>
          <div className="text-center text-2xl font-semibold py-8">
            <h2>Polular in Category</h2>
          </div>
          <ProductLists data={popularProducts} />
        </div>
      </section>
      <BackToTopButton />
    </Helmet>
  );
};

export default Home;
