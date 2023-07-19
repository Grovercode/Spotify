import { css, styled } from "styled-components";

export const ThreeLineButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  z-index: 3;

  &:focus {
    outline: none;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(45deg);
    `}
`;

export const Line = styled.span`
  width: 100%;
  height: 4px;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;

  &:first-child {
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateY(6px) rotate(-45deg);
      `}
  }

  &:last-child {
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateY(-6px) rotate(45deg);
      `}
  }
`;
