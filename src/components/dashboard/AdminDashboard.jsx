import AllTask from "../others/AllTask";
import AllUsers from "../others/AllUsers";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

const AdminDashboard = (props) => {
  return (
    <div className="bg-black pb-1">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllUsers />
    </div>
  );
};

export default AdminDashboard;
