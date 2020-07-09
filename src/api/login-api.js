import { handleResponse, handleError } from "./api-utils";
import config from "../config";
const baseUrl = config.baseApiURL[config.env] + "/login";

export function login(credentials) {
  return fetch(baseUrl + "/auth", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(credentials),
  })
    .then(handleResponse)
    .catch(handleError);
}
