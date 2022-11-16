import { useParams } from "react-router-dom";
import { useContext } from "react";
import { NewsContext } from "../../Contexts/news";
import { Link } from "react-router-dom";

export const DetailNews = () => {
  const { newsState } = useContext(NewsContext);
  console.log(newsState);

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
                className="ml-1 text-xs font-normal text-gray-800 hover:text-gray-600 md:ml-2"
              >
                News
              </a>
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
          <Link to={"/news/create"}>
            <button className="flex items-center  bg-white border border-darkgray px-2.5 py-2 rounded shadow text-base transition hover:bg-[#ffffffad]">
              <span>
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </span>
              Edit
            </button>
          </Link>
          <Link to={"/news/create"} className="ml-3">
            <button className="flex items-center text-white bg-primary px-2.5 py-2 rounded text-base shadow  transition hover:bg-[#4e46b4e0]">
              Show in front store
              <span>
                <svg
                  className="w-4 h-4 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex md:gap-x-5 mx-5 flex-wrap lg:flex-nowrap">
        <div className="basis-full lg:basis-8/12">
          <table className="border-collapse border border-slate-300 w-full bg-white">
            <thead>
              <tr>
                <th
                  className="border border-slate-300 p-3 text-slate-600"
                  colSpan={2}
                >
                  General Informations
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-3 text-[#9197A4] w-1/3">
                  Title
                </td>
                <td className="border border-slate-300 p-3  w-2/3">
                  {news.title}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 text-[#9197A4] w-1/3">
                  Image
                </td>
                <td className="border border-slate-300 p-3  w-2/3">
                  <img src={news.image} alt="des" className="w-[40px] mr-3" />
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 text-[#9197A4] w-1/3">
                  Description
                </td>
                <td className="border border-slate-300 p-3  w-2/3">
                  {news.description}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 text-[#9197A4] w-1/3">
                  Content
                </td>
                <td className="border border-slate-300 p-3  w-2/3">
                  {news.content}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 text-[#9197A4] w-1/3">
                  Tag
                </td>
                <td className="border border-slate-300 p-3  w-2/3">
                  {news.tag.map((value, index) => (
                    <span
                      key={index}
                      className={`bg-primary text-white text-xs font-normal mr-2 px-2.5 py-1 cursor-pointer rounded `}
                    >
                      {value}
                    </span>
                  ))}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 text-[#9197A4] w-1/3">
                  Status
                </td>
                <td className="border border-slate-300 p-3 text-xs w-2/3">
                  {news.status ? (
                    <div className=" text-white flex items-center ">
                      <div className="bg-success rounded-lg p-1">ENABLED</div>
                    </div>
                  ) : (
                    <div className=" text-white flex items-center ">
                      <div className="bg-error rounded-lg p-1">UNENABLED</div>
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 text-[#9197A4] w-1/3">
                  Short description
                </td>
                <td className="border border-slate-300 p-3  w-2/3">
                  {news.shortdescription}
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
                <td className="border border-slate-300 p-3 text-[#9197A4]">
                  Name
                </td>
                <td className="border border-slate-300 p-3 ">
                  {news.author.name}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 text-[#9197A4]">
                  Date
                </td>
                <td className="border border-slate-300 p-3 ">
                  {news.author.Date}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 text-[#9197A4]">
                  Phone
                </td>
                <td className="border border-slate-300 p-3 ">
                  {news.author.Phone}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
