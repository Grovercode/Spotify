import styled from "styled-components";
import { DEVICE_TYPES } from "../../config/utils";

export const Wrapper = styled.div`
  width: ${(props) =>
    props?.deviceType === DEVICE_TYPES.MOBILE ? "100%" : "50%"};
  min-width: min-content;
  background: ${(props) =>
    props?.color
      ? `linear-gradient(135deg, ${props?.color} 0%, #000 100%)`
      : ""};

  @media screen and (max-width: 768px) {
    height: 100%;
    overflow: ${(props) => (props?.selectedSong ? "auto" : "")};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) =>
    props?.deviceType === DEVICE_TYPES.MOBILE ? "0 16px 0 0" : "0 16px 0 16px"};
`;

export const Title = styled.div`
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
`;

export const ScrollableContainer = styled.div`
  margin-top: 24px;
  max-height: 80%;

  @media screen and (max-width: 768px) {
    margin-top: 12px;
  }
`;

export const CloseButton = styled.img`
  width: 28x;
  height: 24px;
`;
