import React, { useEffect, useContext } from "react";
import CreateFormUser from "./CreateFormUser";
import GlobalContext from "../../../context/globalcontext";
import { saveUser } from "../../../api/user-api";
import toastr from "toastr";

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const CreateUser = () => {
  const [contextState, ,] = useContext(GlobalContext);
  useEffect(() => {
    document.title = "GG-CMS - Register";
  }, []);

  const createUserHandler = () => {
    let userData = {
      username: document.getElementById("formBasicUser").value,
      password: document.getElementById("formBasicPassword").value,
      repassword: document.getElementById("formBasicRePassword").value,
      email: document.getElementById("formBasicEmail").value,
      status: document.getElementById("formBasicStatus").checked
        ? "Active"
        : "Inactive",
      isAdmin: document.getElementById("formBasicIsAdmin").checked,
    };

    if (
      userData.username === "" ||
      userData.password === "" ||
      userData.repassword === ""
    ) {
      toastr.error("Please fill all the form's fields.");
      return;
    }

    if (userData.password !== userData.repassword) {
      toastr.error("Password and Retype Password must be equal.");
      return;
    }

    if (!validateEmail(userData.email)) {
      toastr.error("The email is invalid.");
      return;
    }

    saveUser(contextState.token, userData)
      .then(() => {
        toastr.success("User created successfully.");
        document.getElementById("create-form").reset();
      })
      .catch((err) => {
        toastr.error(JSON.parse(err.message).error);
      });
  };

  return (
    <div className="container">
      <CreateFormUser handler={createUserHandler} />
    </div>
  );
};

export default CreateUser;
