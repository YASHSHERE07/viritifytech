// ProductsComponent.js
import React, { useState, useEffect } from "react";
import ProductModal from "../component/ProductModal"; // Adjust the import path as needed
import productsData from "../data/productsData.json"; // Adjust the import path as needed

const ProductsComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(
    productsData.products
  );
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredProducts(productsData.products);
    } else {
      const filtered = productsData.products.filter(
        (product) => product.type === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory]);

  const categories = ["Gadgets", "Crypto", "AI"]; // Example categories

  return (
    <section className="py-20">
      <h1 className="mb-12 text-center font-sans text-5xl font-bold text-gray-900">
        Latest Highlights<span className="text-blue-600">.</span>
      </h1>

      {/* Categories Section */}
      <div className="text-center mb-8">
        <button
          onClick={() => setSelectedCategory("")}
          className="m-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className="m-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Section */}
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <article
            key={index}
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

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default ProductsComponent;
