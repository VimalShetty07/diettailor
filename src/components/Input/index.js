"use client";

import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};

const sizes = {
  xs: "h-[48px] px-4 text-[14px]",
};

const variants = {
  fill: {
    white_A700: "bg-white-a700 shadow-xs text-blue_gray-600_b2",
  },
};

const Input = React.forwardRef((
  {
    label = "",
    prefix,
    suffix,
    type = "text",
    placeholder = "",
    name = "",
    className = "",
    shape,
    size = "xs",
    variant = "fill",
    color = "white_A700",
    onChange,
    ...restProps
  },
  ref
) => {
  return (
    <label
      className={`${className} flex items-center justify-center self-stretch cursor-text text-blue_gray-600_b2 text-[14px] border-indigo-50 border border-solid bg-white-a700 shadow-xs rounded-[12px] 
        ${shape && shapes[shape]} 
        ${variant && (variants[variant]?.[color] || variants[variant])} 
        ${size && sizes[size]}`}
    >
      {!!label && label}
      {!!prefix && prefix}
      <input
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        {...restProps}
      />
      {!!suffix && suffix}
    </label>
  );
});

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700"]),
};

export { Input };
