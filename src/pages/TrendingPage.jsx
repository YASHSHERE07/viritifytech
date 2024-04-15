// TrendingPage.js
import React, { useState } from "react";
import BentoGrid from "../component/BentoGrid";
import ProductModal from "../component/ProductModal"; // Ensure this path is correct
import trendingData from "../data/trendingData.json"; // Ensure this path is correct
import NewBento from "../component/NewBento";

const TrendingPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-4">
      
      <BentoGrid />
      <h1 className="text-center pt-10 text-[50px] font-bold">Trending News</h1>
      <div className="mx-auto grid grid-cols-1 max-w-screen-xl md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {trendingData.products.map((product, index) => (
          <article
            key={product.id}
            className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-1 p-2">
              <h2 className="text-slate-700">{product.title}</h2>
              <p className="text-slate-400 mt-1 text-sm">{product.summary}</p>
            </div>
          </article>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default TrendingPage;
