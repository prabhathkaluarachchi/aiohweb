import { useParams, useLocation } from "react-router-dom";

const ServiceDetailsSample: React.FC = () => {
  const { slug } = useParams();
  const location = useLocation();
  const service = location.state;

  return (
    <div className="w-11/12 md:w-4/5 mx-auto py-10 text-secondary">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {service?.title || slug}
      </h1>
      <img
        src={service?.img}
        alt={service?.title}
        className="rounded-lg mb-6 w-full max-h-96 object-cover"
      />
      <p className="text-lg font-light leading-7 text-justify">
        {service?.description || "No detailed description available."}
      </p>
    </div>
  );
};

export default ServiceDetailsSample;
