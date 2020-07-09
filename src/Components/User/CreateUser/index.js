import React, { useEffect, useContext } from "react";
import CreateFormUser from "./CreateFormUser";
import GlobalContext from "../../../context/globalcontext";
import { saveUser } from "../../../api/user-api";
import toastr from "toastr";

const CreateUser = () => {
  const [contextState, ,] = useContext(GlobalContext);
  useEffect(() => {
    document.title = "GG-CMS - Register";
  }, []);

  const createUserHandler = () => {
    let username = document.getElementById("formBasicUser").value;
    let password = document.getElementById("formBasicPassword").value;
    let repassword = document.getElementById("formBasicRePassword").value;
    let email = document.getElementById("formBasicEmail").value;
    let status = document.getElementById("formBasicStatus").checked
      ? "Active"
      : "Inactive";

    saveUser(contextState.token, {
      username,
      password,
      repassword,
      email,
      status,
    })
      .then(() => {
        toastr.success("Usuario Creado Exitosamente.");
        document.getElementById("create-form").reset();
      })
      .catch((err) => {
        toastr.error("Error en la Creacion.");
        console.error(err);
      });
  };

  return (
    <div className="container">
      <CreateFormUser handler={createUserHandler} />
    </div>
  );
};

export default CreateUser;
