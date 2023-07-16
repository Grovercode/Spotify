import React, { forwardRef } from "react";
import {
  Duration,
  Icon,
  InfoContainer,
  LeftContainer,
  SongContainer,
  SubTitle,
  Title,
} from "./styles";
import { formatDuration } from "../../../config/utils";

const Song = forwardRef(({ data, selectedSong, setSelectedSong }, ref) => {
  return (
    <SongContainer
      ref={ref}
      onClick={() => setSelectedSong(data)}
      selected={selectedSong?._id === data?._id}
    >
      <LeftContainer>
        <Icon src={data?.photo} alt="song-icon" />
        <InfoContainer>
          <Title>{data?.title}</Title>
          <SubTitle>{data?.artist}</SubTitle>
        </InfoContainer>
      </LeftContainer>
      <Duration>{formatDuration(data?.duration)}</Duration>
    </SongContainer>
  );
});

export default Song;
