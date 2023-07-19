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

  @media screen and (max-width: 1180px) {
    height: 100%;
    overflow: auto;
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
  margin-top: 25px;
  max-height: 80%;
  /* overflow: auto; 

   &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: black;
    opacity: 0.4;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: black;
    opacity: 0.4;
  } */
`;

export const CloseButton = styled.img`
  width: 28x;
  height: 24px;
`;
