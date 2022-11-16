import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { NewsContext } from "../../Contexts/news";

export const UpdateNews = () => {
  const { newsState } = useContext(NewsContext);

  const { id } = useParams();

  const news = newsState.news.find(
    (value, index) => id && index === parseInt(id)
  );
  if (!id || !news) {
    return <h1>Not found!</h1>;
  }

  return (
    <div>
      <nav className="flex ml-6 mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-xs font-normal  hover:text-gray-900"
            >
              Dashboard
            </Link>
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
              <Link
                to="/news"
                className="ml-1 text-xs font-normal text-gray-800 hover:text-gray-600 md:ml-2"
              >
                News
              </Link>
            </div>
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
                {news.title}
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div className="ml-5 mr-5 mb-8 flex justify-between flex-wrap ">
        <h1 className="text-xl font-semibold flex">
          <img src={news.image} alt="des" className="w-[40px] mr-3" />
          {news.title}
        </h1>
        <div className="flex mt-3 md:mt-0">
          <Link to={"/news"} className="ml-3">
            <button className="flex items-center text-white bg-primary px-2.5 py-2 rounded text-base shadow  transition hover:bg-[#4e46b4e0]">
              <span>
                <svg
                  className="w-4 h-4 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
              </span>
              Save
            </button>
          </Link>
        </div>
      </div>
      <div className="flex md:gap-x-5 mx-5 flex-wrap lg:flex-nowrap">
        <div className="basis-full lg:basis-8/12">
          <table className="border-collapse border border-slate-300 w-full bg-white">
            <thead>
              <tr>
                <th className="border border-slate-300 p-3 text-slate-600">
                  General Informations
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-3  w-1/3">
                  <div>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Title <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Press here..."
                      value={news.title}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3  w-1/3">
                  <div>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Image <span className="text-error">*</span>
                    </label>
                    <button className="flex items-center text-white bg-primary px-2.5 py-2 rounded text-base shadow  transition hover:bg-[#4e46b4e0]">
                      Choose file
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3  w-1/3">
                  <div>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Description <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Press here..."
                      value={news.description}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3  w-1/3">
                  <div>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Content <span className="text-error">*</span>
                    </label>
                    <textarea
                      className="
                    form-control
                    block
                    w-full
                    h-96
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Press here..."
                      value={news.content}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3  w-1/3">
                  <div>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Tag
                    </label>
                    <div className="bg-white bg-clip-padding px-3 py-1.5 border border-solid border-gray-300 rounded transition ease-in-out m-0">
                      {news.tag.map((value, index) => (
                        <span
                          key={index}
                          className={`bg-primary text-white text-xs font-normal mr-2 px-2.5 py-1 cursor-pointer rounded `}
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3  w-1/3">
                  <div>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Status
                    </label>
                    <div className="w-full">
                      <div className="inline-flex relative items-center mb-4 cursor-pointer ">
                        {news.status ? (
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            checked
                          />
                        ) : (
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                        )}
                        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3  w-1/3">
                  <div>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Short description
                    </label>
                    <textarea
                      className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                      id="exampleFormControlInput1"
                      value={news.shortdescription}
                      placeholder="Press here..."
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="basis-full lg:basis-4/12 mt-3 lg:mt-0">
          <table className="border-collapse border border-slate-300 w-full bg-white">
            <thead>
              <tr>
                <th
                  className="border border-slate-300 p-3 text-slate-600 "
                  colSpan={2}
                >
                  Author
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-3 ">
                  <div>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Name <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Press here..."
                      value={news.author.name}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 ">
                  <div>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Date <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Press here..."
                      value={news.author.Date}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 ">
                  <div>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Phone <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Press here..."
                      value={news.author.Phone}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
