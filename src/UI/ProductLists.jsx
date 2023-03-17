import ProductCard from "./ProductCard";

const ProductLists = ({ data }) => {
  return (
    <div
      className="grid md:grid-cols-4 mx-8 md:gap-5 
                    md:mx-[90px] items-center my-8"
    >
      {data?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </div>
  );
};

export default ProductLists;
