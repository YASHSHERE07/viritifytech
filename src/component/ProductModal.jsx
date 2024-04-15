// ProductModal.js
import React from "react";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white p-5 rounded-lg max-w-3xl w-full shadow-xl overflow-y-auto h-[800px]">
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-auto mb-4 rounded-2xl"
        />
        <p className="mb-4">{product.fullSummary}</p>
        <div className="text-center mb-4">
          <a
            href={product.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read full article
          </a>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
