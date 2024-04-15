import React from "react";

// BentoGrid Component
const NewBento = () => {
  // Array of elements to render in the grid
  const items = [
    { id: 1, text: "Item 1", imageUrl: "https://via.placeholder.com/200" },
    { id: 2, text: "Item 2", imageUrl: "https://via.placeholder.com/300" },
    { id: 3, text: "Item 3", imageUrl: "https://via.placeholder.com/400" },
    { id: 4, text: "Item 4", imageUrl: "https://via.placeholder.com/300" },
    { id: 5, text: "Item 5", imageUrl: "https://via.placeholder.com/200" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="mx-auto px-6 max-w-6xl text-gray-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-xl bg-white border border-gray-200 shadow-sm relative overflow-hidden ${
                item.id === 1 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <img
                src={item.imageUrl}
                alt={`Placeholder ${item.id}`}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewBento;
