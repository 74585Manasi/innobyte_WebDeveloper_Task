import React from "react";

const sizes = {
  s: "text-[25px] font-bold md:text-[23px] sm:text-[21px]",
  md: "text-[50px] font-bold md:text-[46px] sm:text-[40px]",
  xs: "text-xl font-bold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900_01 font-rubik ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
