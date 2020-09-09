import React from "react";
import Nature from "./../../assets/Nature.jpg";
import street from "./../../assets/street.jpeg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Nature})`,
          }}
        ></div>{" "}
        <a> Shop Nature </a>{" "}
        <div
          style={{
            backgroundImage: `url(${street})`,
          }}
        >
          {" "}
        </div>{" "}
        <a> Shop Street </a>{" "}
      </div>{" "}
    </div>
  );
};

export default Directory;
