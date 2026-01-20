import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllUsers = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] h-60 rounded p-5 m-5  text-white ">
      <div className="flex items-center bg-red-500 mb-2 px-3 py-2 rounded ">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div className="h-[80%] overflow-auto ">
        {userData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="bg-[#2a2525] mb-2 px-3 py-2 flex justify-between rounded "
            >
              <h2 className="w-1/5 text-white">{elem.name}</h2>
              <h3 className="w-1/5 text-blue-600">{elem.taskCounts.newTask}</h3>
              <h5 className="w-1/5 text-yellow-400">
                {elem.taskCounts.active}
              </h5>
              <h5 className="w-1/5 text-green-600">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="w-1/5 text-red-600">{elem.taskCounts.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllUsers;
