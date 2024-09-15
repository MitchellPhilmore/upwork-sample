import React from "react";

interface BlogPostProps {
  title: string;
author: string;
  category: string;
  date: string;
  content: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  author,
  category,
  date,
  content,
}) => {
  return (
    <article className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-md:mt-10">
      <h1 className="self-start mt-12 text-5xl font-bold leading-tight text-neutral-700 max-md:mt-10 max-md:text-4xl">
        {title}
      </h1>
      <div className="flex flex-wrap gap-5 justify-between mt-6 w-full max-md:max-w-full">
        <div className="text-xl font-bold text-zinc-800">
          Written by {author}
        </div>
        <div className="flex gap-5 my-auto leading-none text-neutral-700">
          <div className="gap-2.5 self-stretch px-3 py-1.5 text-sm rounded bg-slate-200">
            {category}
          </div>
          <div className="my-auto text-base font-medium tracking-wide">
            {date}
          </div>
        </div>
      </div>
      <hr className="shrink-0 mt-8 h-0.5 border-2 border-solid border-neutral-200 max-md:max-w-full" />
      <div className="mt-12 max-md:mt-10 max-md:max-w-full">
        {content}
      </div>
    </article>
  );
};

export default BlogPost;
