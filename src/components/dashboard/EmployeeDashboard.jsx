import Header from "../others/Header";
import TaskList from "../others/TaskList";
import TaskList2 from "../others/TaskList2";

const EmployeeDashboard = (props) => {
  return (
    <div>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskList data={props.data} />
      <TaskList2 data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
