/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  divClassName: any;
  divClassNameOverride: any;
  line: string;
}

export const News = ({
  className,
  divClassName,
  divClassNameOverride,
  line = "/img/line-4-3.svg",
}: Props): JSX.Element => {
  return (
    <div className={`news ${className}`}>
      <div className="rectangle" />
      <div className="group">
        <div className={`text-wrapper-3 ${divClassName}`}>タイトル</div>
        <div className={`text-wrapper-4 ${divClassNameOverride}`}>
          せつめいを書く。１行から、２行程度がでかけるといい
        </div>
        <img className="line" alt="Line" src={line} />
      </div>
    </div>
  );
};

News.propTypes = {
  line: PropTypes.string,
};
