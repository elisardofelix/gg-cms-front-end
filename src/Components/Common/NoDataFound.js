import React from "react";

const NoDataFound = ({ condition }) => (
  <div className={"no-data-found" + (condition ? "" : " hide")}>
    <h1>No data</h1>
  </div>
);

export default NoDataFound;
