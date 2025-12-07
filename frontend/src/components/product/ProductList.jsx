import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="flex  flex-wrap gap-2.5 border-2 border-black">
      {products.map((product) => (
        <ProductCard product={product} key={product.name} />
      ))}
    </div>
  );
};

export default ProductList;
