import { handleResponse, handleError } from "./api-utils";
import config from "../config";
const baseUrl = config.baseApiURL[config.env] + "/user";

export function saveUser(token, user) {
  return fetch(baseUrl + "/", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}
