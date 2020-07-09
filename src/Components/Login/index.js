import React, { useEffect, useState, useContext } from "react";
import GlobalContext from "../../context/globalcontext";
import LoginForm from "./LoginForm";
import jQuery from "jquery";
import { login } from "../../api/login-api";
import { useHistory } from "react-router-dom";
import toastr from "toastr";

const Login = () => {
  const history = useHistory();
  const [, , contextMiddleware] = useContext(GlobalContext);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  useEffect(() => {
    document.title = "GG-CMS - Register";
  }, []);

  const loginHandler = () => {
    if (jQuery("#login-form")[0].checkValidity()) {
      login({ username, password })
        .then((json) => {
          contextMiddleware.logIn(json.token);
          toastr.success("Login Successfully.");
          history.push("/");
        })
        .catch(() => toastr.error("Wrong User Name or Password."));
    }
  };

  return (
    <div className="container">
      <div className="app-form">
        <LoginForm
          password_state={{ password, setPassword }}
          username_state={{ username, setUsername }}
          loginHandler={loginHandler}
        />
      </div>
    </div>
  );
};

export default Login;
