import { createElement } from "react";
import classNames from "classnames";
import propTypes from "prop-types";

export default function Button({ size, children }) {
  return createElement(
    "button",
    {
      className: classNames(
        "font-bold flex items-center justify-center bg-[#1d9bf0] rounded-full hover:bg-[#478CD8] transition-colors",
        {
          "px-4 h-9": size === "normal",
          "px-4 h-[52px] text-[17px] w-full": size === "large",
        }
      ),
    },
    children
  );
}

Button.propTypes = {
  size: propTypes.oneOf(["normal", "large"]),
};

Button.defaultProps = {
  size: "normal",
};
