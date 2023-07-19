import React from "react";
import { ThreeLineButton } from "./styles";

const ThreeLineButtonComponent = ({ onClick, showNavBar }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <ThreeLineButton isOpen={showNavBar} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </ThreeLineButton>
  );
};

export default ThreeLineButtonComponent;
