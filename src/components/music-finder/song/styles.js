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
export const SkeletonSongContainer = styled(SongContainer)`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.07) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: shineAnimation 1.5s linear infinite;
  }

  @keyframes shineAnimation {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export const SkeletonIcon = styled(Icon)`
  background: #999999;
  opacity: 0.2;
`;

export const SkeletonTitle = styled(Title)`
  background: #999999;
  width: 180px;
  height: 18px;
  opacity: 0.2;
  border-radius: 8px;
`;

export const SkeletonSubTitle = styled(SubTitle)`
  background: #999999;
  width: 50px;
  margin-top: 9px;
  height: 14px;
  opacity: 0.2;
  border-radius: 8px;
`;

export const SkeletonDuration = styled(Duration)`
  background: #999999;
  width: 40px;
  height: 14px;
  opacity: 0.2;
  border-radius: 8px;
`;
