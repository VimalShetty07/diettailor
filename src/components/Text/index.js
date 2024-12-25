import React from "react";

const sizes = {
  text_medium_16: "tracking-[-0.75px] font-manrope text-[16px] font-normal",
  heading_xlarge_48px: "tracking-[-3.83px] text-[48px] font-normal md:text-[44px] sm:text-[38px]",
  textxs: "text-[12px] font-normal",
  texts: "text-[16px] font-normal",
  textlg: "text-[24px] font-normal md:text-[22px]",
  textxl: "text-[36px] font-normal md:text-[34px] sm:text-[32px]",
  text2xl: "text-[72px] font-normal md:text-[48px]",
};

const Text = ({ 
  children, 
  className = "", 
  as, 
  size = "text_medium_16", 
  ...restProps 
}) => {
  const Component = as || "p";
  return (
    <Component 
      className={`${className} ${sizes[size]}`} 
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Text;
