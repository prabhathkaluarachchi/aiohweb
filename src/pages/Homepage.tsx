import Footer from "../component/common/Footer";
import Header from "../component/common/Header";

function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50 text-center overflow-x-hidden">
      {/* Header */}
      <div className="mx-auto mb-3.5 p-3.5">
        <Header currentPath="/" />
      </div>

      {/* Main content */}
      <div className="mx-auto mb-3.5">
        {/* Maintenance Info */}
        <div className="mt-10 text-left max-w-md mx-auto bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Available Pages:
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            {/* List items... */}
          </ul>
        </div>

        {/* Boxes */}
        <div className="mt-10 px-4 py-10 sm:p-10 bg-blue-600">
          <h2 className="text-xl font-semibold text-white mb-2">
            Under Maintenance
          </h2>
          <p className="text-white">
            We're currently working on this page. Please check back later.
          </p>
        </div>

        <div className="mt-10 px-4 py-10 sm:p-10 bg-yellow-600">
          <h2 className="text-xl font-semibold text-white mb-2">
            Under Maintenance
          </h2>
          <p className="text-white">
            We're currently working on this page. Please check back later.
          </p>
        </div>

        <div className="mt-10 px-4 py-10 sm:p-10 bg-green-600 mb-60">
          <h2 className="text-xl font-semibold text-white mb-2">
            Under Maintenance
          </h2>
          <p className="text-white">
            We're currently working on this page. Please check back later.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Homepage;
