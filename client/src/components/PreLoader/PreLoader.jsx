import React from "react";
import "./PreLoader.css";

const PreLoader = () => {
  return (
    <div className="loader-container">
      <img src="./logo.png" alt="Logo" className="loader-logo" />
      <div className="loader"></div>
    </div>
  );
};

export default PreLoader;
