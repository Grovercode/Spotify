import React from "react";
import {
  Duration,
  Icon,
  InfoContainer,
  LeftContainer,
  SongContainer,
  SubTitle,
  Title,
} from "./styles";

const Song = ({ data, selectedSong, setSelectedSong }) => {
  // Function to convert duration to "mm:ss" format
  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 100);
    const seconds = duration % 100;
    return `${minutes}:${seconds}`;
  };

  return (
    <SongContainer
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
};

export default Song;
