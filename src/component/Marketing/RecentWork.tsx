const RecentWork: React.FC = () => {
  return (
    <div className="mx-auto py-4">
      {/* sec heading */}
      <div className="flex flex-col items-center">
        <h1 className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold text-center">
          What We've Done
        </h1>
        <p className="md:w-3/4 lg:w-1/2 mt-4 text-sm lg:text-lg leading-6 md:leading-7 lg:leading-8 font-light text-center">
          Explore our recent projects to see how strategy, creativity, and
          performance come together to drive meaningful results for our clients.
        </p>
      </div>
    </div>
  );
};

export default RecentWork;
