import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 280px;
  max-width: 480px;
  height: max-content;
`;

export const Header = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const Title = styled.div`
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
`;

export const SubTitle = styled.div`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  opacity: 0.6;
`;

export const Cover = styled.img`
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  margin: 32px 0px 24px 0px;
`;

export const Seekbar = styled.div`
  width: 100%;
  height: 6px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;

  input[type="range"] {
    cursor: pointer;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
`;

export const Progress = styled.div`
  height: 100%;
  background: #fff;
  opacity: 1;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 32px;
  user-select: none;
`;

export const SideIcons = styled.img`
  width: 48px;
  height: auto;
  cursor: pointer;
`;

export const MusicController = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  max-width: 100%;
  gap: max(30px, 1%);
  justify-content: center;
`;

export const ControllerIcons = styled.img`
  width: 32px;
  height: auto;
  aspect-ratio: 1/1;
  cursor: pointer;
`;

export const PlayPauseIcon = styled.img`
  width: auto;
  height: 48px;
  aspect-ratio: 1/1;
  flex-shrink: 0;
  cursor: pointer;
`;
