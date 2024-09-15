
import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-wrap gap-5 justify-between items-start px-20 py-6 mt-5 w-full text-base font-semibold leading-none text-white bg-teal-500 rounded-xl max-md:px-5 max-md:max-w-full">
      <a href="/" className="my-auto">
        Home
      </a>
      <a href="/about" className="my-auto">
        About Us
      </a>
      <div className="flex self-start whitespace-nowrap">
        <a href="/treatments" className="grow">
          Treatments
        </a>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b35b261dadda1ac46073021b70df3d8716c6a150c08d6027bfc5fbca79ec453d?placeholderIfAbsent=true&apiKey=d34435c2f52d468e948b79f730126110"
          className="object-contain shrink-0 w-5 aspect-square"
          alt=""
        />
      </div>
      <div className="flex flex-wrap gap-10 items-center self-start max-md:max-w-full">
        <a href="/booking" className="self-stretch my-auto basis-auto">
          Booking Now
        </a>
        <a href="/blogs" className="self-stretch my-auto">
          Blogs
        </a>
        <a href="/faq" className="self-stretch my-auto">
          FAQ
        </a>
        <a href="/contact" className="self-stretch my-auto">
          Contact Us
        </a>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/064002c14c2dbb7c8f97f2ceee98065f3f6f03770ac2288d97ea2b57597b48b9?placeholderIfAbsent=true&apiKey=d34435c2f52d468e948b79f730126110"
          className="object-contain shrink-0 self-stretch aspect-[2.25] w-[45px]"
          alt="Search icon"
        />
      </div>
    </nav>
  );
};

export default Navigation;
