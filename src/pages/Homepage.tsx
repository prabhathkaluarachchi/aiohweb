import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Homepage</h1>

      <div className="space-x-4">
        <button
          onClick={() => navigate("/contact")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Contact
        </button>
        <button
          onClick={() => navigate("/Marketing")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Marketing
        </button>
                <button
          onClick={() => navigate("/Webservice")}
          className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Service Details
        </button>
      </div>
    </div>
  );
}

export default Homepage;
