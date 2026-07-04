import React from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";

import { useCart } from "../context/CartContext";

function ProductList() {
  console.log("My Products = ",useCart())
  return (
    <>
      <div className="continer mx-auto px-4 md:px-8 pt-8">
        <SearchFilter />
        <CategoryFilter />
      </div>
    </>
  );
}

export default ProductList;
