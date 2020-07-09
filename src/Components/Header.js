import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import GlobalContext from "../context/globalcontext";
const Header = () => {
  const [context, , contextMiddleware] = useContext(GlobalContext);
  const history = useHistory();
  const logOutHandler = (e) => {
    e.preventDefault();
    contextMiddleware.logOut();
    history.push("/");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">GG-CMS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link
            to="/create-user"
            className="nav-link"
            style={{
              display:
                context.isAuth && contextMiddleware.getTokenClaims().admin
                  ? "initial"
                  : "none",
            }}
          >
            Create User
          </Link>
          <Link
            to="/create-post"
            className="nav-link"
            style={{
              display: context.isAuth ? "initial" : "none",
            }}
          >
            Create Post
          </Link>
        </Nav>

        <a
          href="/"
          style={{
            color: "black",
            display: context.isAuth ? "initial" : "none",
          }}
          onClick={logOutHandler}
        >
          Logout
        </a>
        <Link
          to="/login"
          style={{
            color: "black",
            display: context.isAuth ? "none" : "initial",
          }}
        >
          Login
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
