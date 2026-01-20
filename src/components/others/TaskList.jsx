const TaskList = ({ data }) => {
  return (
    <div className=" px-10 pb-10 flex justify-between gap-5">
      <div className="text-white w-[45%] bg-blue-400 rounded-2xl p-10">
        <h2 className=" text-2xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>
      <div className="text-white w-[45%] bg-green-400 rounded-2xl p-10">
        <h2 className=" text-2xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-2xl font-medium">Completed Task</h3>
      </div>
      <div className="text-white w-[45%] bg-yellow-400 rounded-2xl p-10">
        <h2 className=" text-2xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-2xl font-medium">Active Task</h3>
      </div>
      <div className="text-white w-[45%] bg-red-400 rounded-2xl p-10">
        <h2 className=" text-2xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-2xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskList;
