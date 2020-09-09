import React from "react";
import Nature from "./../../assets/Nature.jpg";
import Street from "./../../assets/street.jpg";
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
        >
          <a>Nature</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Street})`,
          }}
        >
          <a>Street</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
