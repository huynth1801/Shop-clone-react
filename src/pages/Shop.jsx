import React from "react";
import CommonSection from "../UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { HiOutlineSearch } from "react-icons/hi";
import "../styles/shop.css";
import { useState } from "react";
import products from "../assets/data/product.js";
import ProductLists from "../UI/ProductLists";
import BackToTopButton from "../components/BackToTopButton.jsx";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Product" />
      <section>
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-2 px-8 pt-8">
            <div className="filter__widget pb-4 md:pb-0">
              <select name="" id="" onChange={handleFilter}>
                <option value="">Filter by Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
            {/* Sort by */}
            <div className="filter__widget pb-4 md:pb-0">
              <select name="" id="">
                <option value="">Sort by</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
            {/* Search box */}
            <div className="">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search ...."
                  onChange={handleSearch}
                />
                <span className="pr-4 hover:cursor-pointer">
                  <HiOutlineSearch />{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            {productsData.length === 0 ? (
              <h1 className="text-center text-2xl font-semibold">
                No products are found !
              </h1>
            ) : (
              <ProductLists data={productsData} />
            )}
          </div>
        </div>
      </section>
      <BackToTopButton />
    </Helmet>
  );
};

export default Shop;
