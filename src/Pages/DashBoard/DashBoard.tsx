import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useContext, useState } from "react";
import { NewsContext } from "../../Contexts/news";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "So nguoi tiep can quang cao",
      data: labels.map(() => Math.floor(Math.random() * 500)),
      borderColor: "#4E46B4",
      backgroundColor: "#4E46B4",
    },
  ],
};
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Thống kê lượng xem quang cáo",
    },
  },
};

const Dashboard = () => {
  const { newsState } = useContext(NewsContext);
  const { news } = newsState;
  console.log(newsState);

  // ui
  const [indexBox, setIndexBox] = useState<number>(-1);

  const handleOpenBox = (index: number) => {
    if (index === indexBox) setIndexBox(-1);
    else setIndexBox(index);
  };
  return (
    <>
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
        </ol>
      </nav>
      <div className="ml-5 mr-5 mb-8 flex justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
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
      <div className="mx-5 bg-white">
        <Line options={options} data={data} className="p-5" />;
      </div>
      <div>
        <div className="mx-5 mt-5 flex  items-center bg-white py-2.5 px-3 rounded rounded-tl-sm rounded-tr-sm drop-shadow">
          <div className="text-2xl font-semibold  hover:text-gray-900">
            Top 5 trang có lượng truy cập nhiều nhất
          </div>
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
        {news
          .filter((value, index) => index < 5)
          .map((value, index) => (
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
                  <Link to={`/news-update/${index}`}>
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
      </div>
    </>
  );
};

export default Dashboard;
