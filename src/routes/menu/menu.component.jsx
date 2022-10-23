import { Link, Outlet } from "react-router-dom";
const Menu = () => {
  const options = [
    {
      id: 1,
      name: "Home"
    },
    {
      id: 2,
      name: "Shop"
    },
    {
      id: 3,
      name: "Account"
    }
  ];
  return (
    <div>
      <div style={{ flexDirection: "row" }}>
        {options.map((option) => (
          <Link
            style={{ margin: 10 }}
            key={option.id}
            to={
              option.name.toLowerCase() === "home"
                ? "/"
                : option.name.toLowerCase()
            }
          >
            {option.name}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Menu;
