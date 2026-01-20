import { useContext, useState } from "react";
import { getLocalStorage } from "../../utils/LocalStorage";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [newTask, setNewTask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    const createdTask = {
      title,
      date,
      category,
      description,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = userData;

    console.log(data);
    data.forEach((elem) => {
      if (assignTo == elem.name) {
        elem.tasks.push(createdTask);
        elem.taskCounts.newTask = parseInt(elem.taskCounts.newTask) + 1;
        console.log(elem.tasks);
      }
      setUserData(data);
    });
    setTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };
  return (
    <div className="bg-[#161616] text-white  mx-5 p-5">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex w-full"
      >
        <div className="w-1/2">
          <div className="mb-3">
            <h4 className="mb-1 opacity-70">Task Title</h4>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="w-[75%] py-1 px-2 border outline-none rounded"
              type="text"
              placeholder="Make a UI Design "
            />
          </div>
          <div className="mb-3">
            <h4 className="mb-1 opacity-70">Date</h4>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="w-[75%] py-1 px-2  border outline-none rounded"
              type="date"
            />
          </div>
          <div className="mb-3">
            <h4 className="mb-1 opacity-70">Assign To</h4>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="w-[75%] py-1 px-2 border outline-none rounded"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div className="mb-3">
            <h4 className="mb-1 opacity-70">Catogery</h4>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="w-[75%] py-1 px-2 border outline-none rounded"
              type="text"
              placeholder="Design Dev etc"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col ">
          <h4 className="mb-1 opacity-70">Description</h4>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className=" h-[200px] border outline-none rounded p-2"
            name=""
            id=""
          ></textarea>
          <button className="w-full bg-red-500 px-4 py-2 mt-3 rounded cursor-pointer opacity-100 font-semibold">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
