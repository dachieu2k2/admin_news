import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
