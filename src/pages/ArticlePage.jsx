import React from "react";
import { useParams } from "react-router-dom";
import CryptoData from "../data/CryptoData.json";
import AIData from "../data/AIData.json";
import StartupsData from "../data/StartupsData.json";
import SpaceData from "../data/SpaceData.json";
import PodcastsAndInterviewsData from "../data/PodcastsAndInterviewsData.json";

const ArticlePage = () => {
  let { articleId } = useParams();
  let article;

  // Determine the article's source based on the articleId prefix
  if (articleId.startsWith("crypto")) {
    article = CryptoData.crypto.find((a) => a.id === articleId);
  } else if (articleId.startsWith("ai")) {
    article = AIData.ai.find((a) => a.id === articleId);
  } else if (articleId.startsWith("startup")) {
    article = StartupsData.startups.find((a) => a.id === articleId);
  } else if (articleId.startsWith("space")) {
    article = SpaceData.space.find((a) => a.id === articleId);
  } else if (articleId.startsWith("podcasts")) {
    article = PodcastsAndInterviewsData.podcastsAndInterviews.find(
      (a) => a.id === articleId
    );
  }

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      {/* Article Type and Date */}
      <div className="mb-4 text-gray-600">
        <span className="mr-2 text-sm font-medium">{article.type}</span>|
        <span className="ml-2 text-sm">
          {new Date(article.publishedDate).toLocaleDateString()}
        </span>
      </div>
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-auto rounded-md mb-4"
      />
      <div className="text-lg space-y-4">
        <p>{article.fullSummary || article.summary}</p>
        <div className="mt-6">
          <a
            href={article.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
