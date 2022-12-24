import Link from "next/link";
import { useState } from "react";

const CoinInfo = ({ props }) => {
  const [showMore, setShowMore] = useState(false);
  const onClick = () => {
    if (showMore === false) {
      setShowMore(true);
    } else if (showMore === true) {
      setShowMore(false);
    }
  };
  return (
    <div>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <Link href="/">Back to Homepage</Link>
      </button>
      <div className="mx-auto mb-4 p-0 sm:p-4 md:w-1/3 max-w-2xl">
        <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full overflow-hidden">
            <img
              src={props.image?.large}
              alt="coinimage"
              className="mx-auto w-3/5 h-full object-cover object-center transition-all duration-300 transform group-hover:scale-110"
            />

            <h2 className="absolute top-6 left-6 inline-block pt-0.5 pb-1.5 px-2 rounded-md text-sm text-gray-100 subpixel-antialiased font-medium bg-gradient-to-br from-green-500 to-blue-500 cursor-pointer">
              {props.categories}
            </h2>
          </div>
          <div className="my-6 py-3 px-8 flex flex-col justify-around items-center">
            <h1 className="title-font text-2xl text-center font-bold text-gray-800 antialiased">
              {props.name}
            </h1>
            <p className="line-clamp-8 py-5 overflow-hidden leading-relaxed text-sm text-gray-500 text-left font-medium cursor-pointer">
              {!showMore
                ? props.description?.en.slice(0, 624)
                : props.description?.en}
            </p>
            <button
              onClick={onClick}
              className="self-start p-2 bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text text-transparent font-medium no-underline transform hover:scale-105"
            >
              Read more
            </button>
          </div>
          <div className="py-3 px-2 flex flex-wrap justify-around border-t border-gray-200">
            <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Followers : {props.community_data?.twitter_followers}
            </span>
            <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {props.genesis_date}
            </span>
            <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              {props.last_updated?.slice(0, 10)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
