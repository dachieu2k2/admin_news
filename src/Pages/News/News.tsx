import { useContext } from "react";
import { Link } from "react-router-dom";
import { NewsContext } from "../../Contexts/news";
import { useState } from "react";

export const News = () => {
  const { newsState } = useContext(NewsContext);
  console.log(newsState);

  // ui
  const [indexBox, setIndexBox] = useState<number>(-1);

  const handleOpenBox = (index: number) => {
    if (index === indexBox) setIndexBox(-1);
    else setIndexBox(index);
  };

  const { isLoading, news } = newsState;
  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className=" w-10 h-10 mb-10 text-gray-200 animate-spin fill-primary"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div>
      <nav className="flex ml-6 mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-xs font-normal  hover:text-gray-900"
            >
              Dashboard
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3  h-3 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <a
                href="#"
                className="ml-1 text-xs font-normal text-[#6B757D] hover:text-gray-900 md:ml-2"
              >
                News
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div className="ml-5 mr-5 mb-8 flex justify-between">
        <h1 className="text-2xl font-semibold">News</h1>
        <Link to={"/news/create"}>
          <button className="flex items-center text-white bg-primary px-3 py-2 rounded text-base ">
            <span>
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            {"  "}
            Create News
          </button>
        </Link>
      </div>
      <div className="mx-5 flex justify-between items-center bg-white py-2.5 px-3 rounded rounded-tl-sm rounded-tr-sm drop-shadow">
        <h2>List News</h2>
        <ul className="hidden md:flex gap-x-2 text-sm">
          <li className="bg-darkgray px-1 rounded">All News</li>
          <li>Tu van</li>
          <li>Dinh duong</li>
          <li>Khoe dep</li>
          <li>Tre em</li>
          <li>Cac benh</li>
          <li>Covid-19</li>
        </ul>
      </div>
      <div className="mx-5 flex justify-between items-center bg-white py-2.5 px-3 text-base">
        <h2>2,364 News Displayed</h2>
        <button className="flex items-center  bg-white border border-darkgray px-2 py-1.5 rounded text-base ">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filter
        </button>
      </div>
      <div className="mx-5  overflow-x-auto py-2.5 px-3">
        <div className="flex  w-full justify-center overflow-hidden items-center mb-4 text-gray-600 text-xs font-semibold my-3">
          <div className="basis-1/12">
            <div className="flex ">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-primary bg-primary rounded border-gray-300 focus:ring-primary "
              />
            </div>
          </div>
          <div className="basis-1/12">IMAGE</div>
          <div className="basis-3/12">TITLE</div>
          <div className="basis-3/12">DESCRIPTION</div>
          <div className="basis-1/12">AUTHOR</div>
          <div className="basis-2/12">STATUS</div>
          <div className="basis-1/12"></div>
        </div>
      </div>
      {news.map((value, index) => (
        <div
          className="mx-5 py-2.5 px-3 bg-white borber border-b-2 box-border relative"
          key={index}
        >
          <div className="flex w-full justify-center overflow-x-auto mb-4 text-gray-600 text-xs font-semibold my-3">
            <div className="basis-1/12">
              <div className="flex ">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-primary bg-primary rounded border-gray-300 focus:ring-primary "
                />
              </div>
            </div>
            <div className="basis-1/12">
              <img
                className="w-[30px] h-auto rounded-lg"
                src={value && value.image}
                alt="image description"
              />
            </div>
            <div className="basis-3/12">{value.title}</div>
            <div className="basis-3/12">{value.description}</div>
            <div className="basis-1/12">{value.author.name}</div>
            <div className="basis-2/12">
              {value.status ? (
                <div className=" text-white flex items-center">
                  <div className="bg-success rounded-lg p-1">ENABLED</div>
                </div>
              ) : (
                <div className=" text-white flex items-center">
                  <div className="bg-error rounded-lg p-1">UNENABLED</div>
                </div>
              )}
            </div>
            <div className="basis-1/12 ">
              <button
                className="flex items-center  bg-white border border-darkgray px-2 py-1.5 rounded text-base "
                onClick={() => handleOpenBox(index)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          {indexBox === index && (
            <div className="absolute top-12 right-14 z-10 bg-white py-3 px-4 rounded border border-darkgray text-sm text-gray-500">
              <Link to={`/news/${index}`}>
                <div className="mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  View
                </div>
              </Link>
              <Link to={`/news/update/${index}`}>
                <div className="mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Edit
                </div>
              </Link>
              <Link to={`/news`}>
                <div className="mb-2 flex items-center text-error">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete
                </div>
              </Link>
            </div>
          )}
        </div>
      ))}
      <div className="mx-5 mt-8 flex flex-row-reverse">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <a
                href="#"
                className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-primary hover:text-white "
              >
                <span className="sr-only">Previous</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-primary hover:text-white "
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-primary hover:text-white "
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="z-10 px-3 py-2 leading-tight border  bg-primary text-white hover:bg-blue-100 hover:text-blue-700 "
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-primary hover:text-white "
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-primary hover:text-white "
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-primary hover:text-white "
              >
                <span className="sr-only">Next</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
