import ProductList from "@/components/product/ProductList";
import React from "react";
import products from "@/products";

const Home = () => {
  return (
    <div>
      <h1 className="mt-12 mb-12 text-2xl text-gray-800">Hello Sujoy</h1>

      <h2>Here is the products</h2>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
