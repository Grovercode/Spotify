import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  box-shadow: 2px 1px 20px 1px rgba(0, 0, 0, 0.2);
  min-width: fit-content;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${(props) => (props?.isOpen ? "0" : "-365px")};
    height: -webkit-fill-available;
    width: 100%;
    max-width: 140px;
    padding: 24px;
    transition: 0.2s linear;
    opacity: 1;
    z-index: 3;
    background: inherit;
  }
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

  @media screen and (max-width: 768px) {
    padding-top: 12px;
    font-size: 18px;
  }
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

export const CloseButton = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 36px;
`;

export const Logo = styled.img`
  height: ${(props) => props?.height};
  cursor: pointer;
`;
