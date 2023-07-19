import { styled } from "styled-components";

export const ThreeLineButton = styled.button`
  width: 48px;
  height: 40px;
  border: none;
  cursor: pointer;
  z-index: 3;
  position: relative;
  background-color: transparent;
  overflow: hidden;

  & span {
    display: block;
    position: absolute;
    content: "";
    width: 30px;
    height: 4px;
    background-color: white;
    transition: transform 0.2s;
    top: 50%;
    left: 50%;
    transform-origin: center;
    margin-top: -2px;
    margin-bottom: -2px;
  }

  & span:nth-child(1) {
    transform: translate(-50%, -10px);
  }

  & span:nth-child(2) {
    top: 50%;
    transform: translate(-50%, 0px);
  }

  & span:nth-child(3) {
    transform: translateY(10px);
    transform: translate(-50%, 10px);
  }

  & span:nth-child(2) {
    background-color: white;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    & span:nth-child(1) {
      transform: rotate(45deg) translate(-50%, 15px);
      
    }

    & span:nth-child(2) {
      opacity: 0;
    }

    & span:nth-child(3) {
      transform: rotate(-45deg) translate(-50%, -15px);
    }
  `}
`;
