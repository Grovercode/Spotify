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
  console.log("song data = ", data);
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
      <Duration>{data?.duration}</Duration>
    </SongContainer>
  );
};

export default Song;
