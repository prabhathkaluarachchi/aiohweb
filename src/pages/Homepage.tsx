import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="p-6 min-h-screen bg-gray-50 text-center">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Homepage</h1>

      {/* Navigation Buttons */}
      <div className="space-x-4 mb-8">
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
          className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition"
        >
          Service Details
        </button>
        <button
          onClick={() => navigate("/Aboutus")}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          About Us
        </button>
      </div>

      {/* Maintenance Info */}
      <div className="mt-10 text-left max-w-md mx-auto bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Available Pages:
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
          <li>
            <span className="font-medium text-black">Contact</span> – Available
          </li>
          <li>
            <span className="font-medium text-black">Marketing</span> – Available
          </li>
          <li>
            <span className="font-medium text-black">Service Details</span> – Available
          </li>
          <li>
            <span className="font-medium text-black">About Us</span> – 
            <span className="text-red-500 ml-1">This page is under maintenance</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
