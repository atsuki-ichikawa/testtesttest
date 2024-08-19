/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  className: any;
  graphicClassName: any;
  divClassName: any;
}

export const ElementCard = ({ className, graphicClassName, divClassName }: Props): JSX.Element => {
  return (
    <div className={`element-card ${className}`}>
      <div className={`graphic ${graphicClassName}`}>
        <div className="text-wrapper">写真いれる</div>
      </div>
      <div className="copy">
        <div className={`div ${divClassName}`}>Name</div>
        <div className="text-wrapper-2">何か一言二言入れる</div>
      </div>
    </div>
  );
};
