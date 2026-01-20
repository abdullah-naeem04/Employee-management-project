import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="min-h-60 w-[24%] bg-green-400 rounded-2xl shrink-0 p-5 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h3 className="bg-green-500 py-1 px-2 rounded font-semibold">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="text-lg font-semibold pt-8">{data.title}</h2>
      <p className="text-sm pt-1">{data.description}</p>
      <div className="mt-4">
        <button className="w-full bg-red-500 text-sm py-1 px-2 rounded cursor-pointer">
          Failed task
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
