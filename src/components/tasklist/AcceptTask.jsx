const AcceptTask = ({ data }) => {
  return (
    <div className="min-h-60 w-[24%] bg-red-400 rounded-2xl shrink-0 p-5 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 py-1 px-2 rounded font-semibold">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <div>
        <h2 className="text-lg font-semibold pt-8">{data.title}</h2>
        <p className="text-sm pt-1">{data.description}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 text-sm py-1 px-2 rounded cursor-pointer">
          Mark as completed
        </button>
        <button className="bg-red-500 text-sm py-1 px-2 rounded cursor-pointer">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
