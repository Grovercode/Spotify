import styled from "styled-components";

export const SongContainer = styled.div`
  display: flex;
  padding: 16px;

  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: ${(props) =>
    props?.selected ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0)"};
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 56px;
`;

export const LeftContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  margin-right: 16px;
`;

export const SubTitle = styled.div`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  opacity: 0.6;
`;

export const Duration = styled.div`
  color: #fff;
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  opacity: 0.6;
`;
