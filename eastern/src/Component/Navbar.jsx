import { Switch } from "@mui/material";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const label = { inputProps: { "aria-label": "Switch demo" } };
const Navbar = (props) => {
  const NavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#e65100" : "grey",
    };
  };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            {props.title}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  style={NavLinkStyle}
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={NavLinkStyle} className="nav-link" to="/about">
                  {props.about}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={NavLinkStyle} className="nav-link" to="/list">
                  List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={NavLinkStyle} className="nav-link" to="/movie">
                  MovieList
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={NavLinkStyle} className="nav-link" to="/data">
                  DataRecord
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={NavLinkStyle} className="nav-link" to="/api">
                  FetchApi
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={NavLinkStyle} className="nav-link" to="/hooks">
                  Hooks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={NavLinkStyle} className="nav-link" to="/redux">
                  Redux
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  style={NavLinkStyle}
                  className="nav-link "
                  to="/contact"
                >
                  ContactUs
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                onClick={() => {
                  props.toggleMode("primary");
                }}
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
              ></div>
            </div>
            <div className="d-flex">
              <div
                className="bg-success rounded mx-2"
                onClick={() => {
                  props.toggleMode("success");
                }}
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
              ></div>
            </div>
            <div className="d-flex">
              <div
                className="bg-danger rounded mx-2"
                onClick={() => {
                  props.toggleMode("danger");
                }}
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
              ></div>
            </div>
            <div className="d-flex">
              <div
                className="bg-warning rounded mx-2"
                onClick={() => {
                  props.toggleMode("warning");
                }}
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
              ></div>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>

            <Switch
              {...label}
              onClick={() => {
                props.toggleMode(null);
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};
//it set the datatype of the props which we are pass to it
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
//it set the default values to the props if we cannot pass to them
Navbar.defaultProps = {
  title: "set the title here",
  about: "set the about here!",
};

export default Navbar;
