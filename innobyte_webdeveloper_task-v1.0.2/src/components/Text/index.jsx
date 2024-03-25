import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-xl font-normal",
  s: "text-base font-normal",
  "2xl": "text-[35px] font-medium md:text-[33px] sm:text-[31px]",
  xl: "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
  md: "text-lg font-medium",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-700 font-rubik ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
