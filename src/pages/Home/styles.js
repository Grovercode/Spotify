import styled from "styled-components";

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
  gap: 100px;
  padding: 32px;
  width: 100%;
  overflow: auto;
`;

export const MusicPlayerContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  margin: 66px 0 0 0;
`;
