import React from "react";

import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[16px]",
};

const variants = {
    fill: {
      gray_900_01: "bg-gray-900_01 text-white-a700",
      deep_purple_400_a2: "bg-deep_purple-400_a2",
      deep_purple_A100_01: "bg-deep_purple-a100_01 text-white-a700",
      primary_purple_normal: "bg-primary-purple_normal text-white-a700",
    },
    outline: {
      deep_purple_400_a2: "border-deep_purple-400_a2 border border-solid",
    },
  };
  
  const sizes = {
    xs: "h-[30px] px-1.5 text-[16px]",
    md: "h-[54px] px-3.5",
    sm: "h-[34px] px-[30px] text-[16px]",
  };
  
  const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "sm",
    color = "primary_purple_normal",
    ...restProps
  }) => {
    return (
      <button
        className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap 
          ${shape && shapes[shape]} 
          ${size && sizes[size]} 
          ${variant && variants[variant]?.[color]}`}
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
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs", "md", "sm"]),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf([
      "gray_900_01",
      "deep_purple_400_a2",
      "deep_purple_A100_01",
      "primary_purple_normal",
    ]),
  };
  
  export default Button ;
  