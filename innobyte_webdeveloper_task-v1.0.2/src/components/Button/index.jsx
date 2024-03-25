import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[22px]",
};
const variants = {
  outline: {
    red_A200: "border-red-A200 border border-solid text-red-A200",
    red_500: "border-red-500 border-2 border-solid text-red-500",
  },
  fill: {
    red_500: "bg-red-500 text-white-A700",
    red_50: "bg-red-50",
  },
};
const sizes = {
  xl: "h-[60px] px-[35px] text-base",
  lg: "h-[60px] px-[15px]",
  md: "h-[55px] px-[15px]",
  xs: "h-[33px]",
  sm: "h-[45px] px-[35px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "red_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xl", "lg", "md", "xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["red_A200", "red_500", "red_50"]),
};

export { Button };
