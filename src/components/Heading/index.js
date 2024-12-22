import React from "react";

const sizes = {
  textmd: "text-[20px] font-medium",
  headingxs: "text-[48px] font-semibold md:text-[44px] sm:text-[38px]",
};

const Heading = ({
  children,
  className = "",
  size = "heading_xlarge_48px",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-gray-900_01 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
