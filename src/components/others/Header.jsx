const Header = (props) => {
  const logoutUser = () => {
    localStorage.setItem("loggedInUser", "");

    // window.location.reload();
    props.changeUser("");
  };
  return (
    <div>
      <div className="flex justify-between items-center p-10 text-white">
        <h1 className="text-2xl font-bold">
          Hello <br /> username👋
        </h1>
        <button
          onClick={logoutUser}
          className="font-semibold py-1 px-3 bg-red-500 rounded cursor-pointer text-lg"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
