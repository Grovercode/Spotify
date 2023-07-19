import React, { useState } from "react";
import { Line, ThreeLineButton } from "./styles";

const ThreeLineButtonComponent = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };
  return (
    <ThreeLineButton isOpen={isOpen} onClick={handleClick}>
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
    </ThreeLineButton>
  );
};

export default ThreeLineButtonComponent;
