import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  box-shadow: 2px 1px 20px 1px rgba(0, 0, 0, 0.2);
`;

export const PlaylistsContainer = styled.div`
  margin-top: 30px;
  gap: 16px;
`;

export const Playlists = styled.div`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 160% */
  opacity: ${(props) => (props.selected ? 1 : 0.4)};
  padding-top: 16px;
  cursor: pointer;
`;

const skeletonAnimation = keyframes`
  0% {
    background-position: 200%;
  }
  100% {
    background-position: -200%;
  }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  gap: 18px;
`;

export const SkeletonPlaylists = styled(Playlists)`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.08) 100%
  );
  background-size: 200% auto;
  height: 24px;
  animation: ${skeletonAnimation} 3s linear infinite;
  border-radius: 8px;
`;

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
