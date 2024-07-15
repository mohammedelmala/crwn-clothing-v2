import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo">Logo</CrwnLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN-IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
