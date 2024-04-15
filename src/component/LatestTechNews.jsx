import React, { useState } from "react";
import ProductModal from "../component/ProductModal"; // Ensure this path is correct
import trendingData from "../data/trendingData.json"; // Ensure this path is correct

const LatestTechNews = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Slice the first three products for display
  const displayedProducts = trendingData.products.slice(0, 3);

  return (
    <section className="py-20">
      <h1 className="mb-12 text-center font-sans text-5xl font-bold text-gray-900">
        Latest Tech News<span className="text-blue-600">.</span>
      </h1>

      <div className="mx-auto grid grid-cols-1 max-w-screen-xl md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {displayedProducts.map((product) => (
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
              <h1 className="text-slate-700">{product.title}</h1>
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
    </section>
  );
};

export default LatestTechNews;
