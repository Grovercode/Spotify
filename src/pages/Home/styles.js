import styled from "styled-components";
import { DEVICE_TYPES } from "../../config/utils";

export const Wrapper = styled.div`
  display: flex;
  color: white;
  height: 100vh;
  position: relative;
  background: ${(props) => props?.background || "black"};
  overflow: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) =>
    props?.deviceType === DEVICE_TYPES.MOBILE ? "0px" : "100px"};
  padding: ${(props) =>
    props?.deviceType === DEVICE_TYPES.MOBILE
      ? props?.selectedSong
        ? "24px"
        : "24px 0px"
      : "32px"};
  width: 100%;
  overflow: auto;
  justify-content: ${(props) =>
    props?.deviceType === DEVICE_TYPES.MOBILE ? "center" : ""};
`;

export const MusicPlayerContainer = styled.div`
  display: flex;
  width: ${(props) =>
    props?.deviceType !== DEVICE_TYPES.DESKTOP
      ? props?.selectedSong
        ? "100%"
        : "0"
      : "50%"};
  justify-content: center;
  margin: 66px 0 0 0;

  @media screen and (max-width: 768px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    height: fit-content;

    overflow: auto;
  }
`;

export const MusicPlayerNavContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Menu = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-left: ${(props) => props?.marginLeft};
`;

export const MusicMenu = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
