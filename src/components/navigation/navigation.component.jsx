import { Fragment, React, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
// import { ReactComponent as CrwnLogo } from "../../assets/PLogo.svg";
import "./navigation.styles.scss";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            {!currentUser ? "SIGNIN" : "SIGNOUT"}
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
