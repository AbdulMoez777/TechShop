import React from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";

import { useCart } from "../context/CartContext";

function ProductList() {
  const { products } = useCart();
  return (
    <>
      <div className="continer mx-auto px-4 md:px-8 pt-8">
        <SearchFilter />
        <CategoryFilter />
        <h2 className="text-2xl font-extrabold px-2 pt-3">
          Featured Gear ({products.length}) Items
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center mt-5">
         {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
