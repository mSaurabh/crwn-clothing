import { Fragment, React } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// import { ReactComponent as CrwnLogo } from "../../assets/PLogo.svg";
import "./navigation.styles.scss";

export const Navigation = () => {
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
          <Link className="nav-link" to="/sign-in">
            SIGNIN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};