import { handleResponse, handleError } from "./api-utils";
import config from "../config";
const baseUrl = config.baseApiURL[config.env] + "/blog";

const wrapSuspensePromise = (promise) => {
  //Set initial status
  let status = "pending";
  let result;
  let suspender = promise
    .then((res) => {
      status = "success";
      result = res;
    })
    .catch((err) => {
      status = "error";
      result = err;
    });

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

export function fetchBlog() {
  const getBlogPromise = getBlog();
  return {
    getBlog: wrapSuspensePromise(getBlogPromise),
  };
}

export function getBlog(limit = config.defaultPageQtyPag, skip = 0) {
  return fetch(baseUrl + "/", {
    method: "GET",
    mode: "cors",
    headers: { limit, skip },
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getBlogPost(permaLink) {
  return fetch(baseUrl + "/post/" + permaLink, {
    method: "GET",
    mode: "cors",
  })
    .then(handleResponse)
    .catch(handleError);
}

export function createBlogPost(token, post) {
  return fetch(baseUrl + "/post", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(post),
  })
    .then(handleResponse)
    .catch(handleError);
}
