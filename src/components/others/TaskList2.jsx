import AcceptTask from "../tasklist/AcceptTask";
import CompleteTask from "../tasklist/CompleteTask";
import FailedTask from "../tasklist/FailedTask";
import NewTask from "../tasklist/NewTask";

const TaskList2 = ({ data }) => {
  return (
    <div className=" text-white tasklist flex h-[50%] w-full gap-5  px-10 overflow-x-auto ">
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList2;
