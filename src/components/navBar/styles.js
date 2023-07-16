import styled from "styled-components";

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
