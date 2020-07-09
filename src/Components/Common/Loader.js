import React from "react";

const Loader = ({ condition }) => (
  <div className={`center-loader ${condition ? " hide" : ""}`}>
    <div className="loader">
      <div className="ball-spin-fade-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
);

export default Loader;
