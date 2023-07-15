import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
  height: 100%;
  width: 100%;
  position: fixed;
  background: ${(props) => props?.background || "black"};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  padding: 32px;
  height: 94%;
  width: 94%;
  overflow: auto;
`;
