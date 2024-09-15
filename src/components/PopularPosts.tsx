import React from "react";

interface Post {
  category: string;
  title: string;
  readTime: string;
  imageSrc: string;
}

const PopularPost: React.FC<Post> = ({
  category,
  title,
  readTime,
  imageSrc,
}) => (
  <div className="flex gap-4 mb-6">
    <div className="flex-shrink-0">
      <img
        loading="lazy"
        src={imageSrc}
        className="object-cover w-20 h-20 rounded-md"
        alt={title}
      />
    </div>
    <div className="flex flex-col justify-between flex-grow min-w-0">
      <div>
        <div className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-teal-700 bg-teal-100 rounded-full">
          {category}
        </div>
        <h3 className="mb-2 text-sm font-semibold text-gray-800 truncate">
          {title}
        </h3>
      </div>
      <div className="flex items-center text-xs text-gray-600">
        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
        {readTime}
      </div>
    </div>
  </div>
);

const PopularPosts: React.FC = () => {
  const posts: Post[] = [
    {
      category: "Men's Health",
      title: "Stress Management for Better Sex",
      readTime: "3 min. to read",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7a944fbba4fcfd52efd724f4c633fd3dbc020754ce9a654d39fc17abfc788aac?placeholderIfAbsent=true&apiKey=d34435c2f52d468e948b79f730126110",
    },
    {
      category: "Men's Health",
      title: "Erectile Dysfunction: Causes and Treatments",
      readTime: "3 min. to read",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/595f24d9c1c7a10e2eb82d091c36046aeb933b51b193cd83fa3fc48d20247f10?placeholderIfAbsent=true&apiKey=d34435c2f52d468e948b79f730126110",
    },
    {
      category: "Men's Health",
      title: "Diet Tips for Boosting Male Fertility",
      readTime: "3 min. to read",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d3a350a026071f77f0a666d55dcd0e1980eaa7b0d1a380c3b411e74086b1ef4f?placeholderIfAbsent=true&apiKey=d34435c2f52d468e948b79f730126110",
    },
    {
      category: "Men's Health",
      title: "Sleep's Impact on Men's Health",
      readTime: "3 min. to read",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a0e27cdbc258b4ac304d3a4002da897465d72f9d15548a5b0ab57669ff1815e7?placeholderIfAbsent=true&apiKey=d34435c2f52d468e948b79f730126110",
    },
  ];

  return (
    <aside className="mb-8">
      <h2 className="mb-6 text-2xl font-bold">
        <span className="text-teal-500">Popular</span>{" "}
        <span className="text-gray-800">Posts</span>
      </h2>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <PopularPost key={index} {...post} />
        ))}
      </div>
    </aside>
  );
};

export default PopularPosts;
