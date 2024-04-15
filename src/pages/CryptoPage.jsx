import React from "react";
import { Link } from "react-router-dom";
import CryptoData from "../data/CryptoData.json"; // Adjust the path as needed

const CryptoPage = () => {
  const backgroundImageUrl =
    "https://img.freepik.com/free-photo/cryptocurrency-concept-with-bitcoin_23-2149153413.jpg"; // Replace with your actual image URL

  return (
    <div>
      <div
        className="relative h-[800px] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-8xl md:text-9xl font-protest-riot   ">Crypto</h1>
          <p className="text-3xl max-w-md text-center">The New Age currency</p>
          <p className="text-3xl max-w-md text-center">
            {" "}
            Decentralizing wealth, one block at a time.
          </p>
        </div>
      </div>

      {/* Articles section */}
      <div className="mx-auto max-w-screen-lg p-4">
        {CryptoData.crypto.map((article) => (
          <article
            key={article.id}
            className="mx-2 my-10 rounded-md border bg-white border-gray-100 text-gray-700 shadow-md md:mx-auto"
          >
            <div className="flex flex-col md:flex-row">
              <div className="p-5 md:w-4/6 md:p-8">
                <span className="rounded-md bg-orange-400 px-2 py-1 text-xs uppercase text-white">
                  {article.type}
                </span>
                <p className="mt-2 text-xl font-black md:mt-6 md:text-4xl">
                  {article.title}
                </p>
                <p className="mt-3 text-gray-600">{article.summary}</p>

                <Link
                  to={`/article/${article.id}`}
                  className="mt-4 mr-2 flex items-center justify-center rounded-md bg-sky-400 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-sky-500"
                >
                  Read More
                </Link>
              </div>
              <div className="mx-auto hidden items-center px-5 md:flex md:p-8">
                <img
                  className="rounded-md shadow-lg"
                  src={article.imageUrl}
                  alt="Article"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CryptoPage;
