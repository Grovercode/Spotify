import React, { useRef, useEffect } from "react";
import { ScrollableContainer, Title, Wrapper } from "./styles";
import Search from "./search";
import Song from "./song";
import {
  InfoContainer,
  LeftContainer,
  SkeletonDuration,
  SkeletonIcon,
  SkeletonSongContainer,
  SkeletonSubTitle,
  SkeletonTitle,
} from "./song/styles";

const SkeletonSong = () => (
  <>
    {[...Array(5)].map((_, index) => (
      <SkeletonSongContainer key={index}>
        <LeftContainer>
          <SkeletonIcon />
          <InfoContainer>
            <SkeletonTitle />
            <SkeletonSubTitle />
          </InfoContainer>
        </LeftContainer>
        <SkeletonDuration />
      </SkeletonSongContainer>
    ))}
  </>
);
const MusicFinder = ({
  setSearch,
  search,
  data,
  selectedSong,
  setSelectedSong,
  isLoading = false,
}) => {
  const selectedSongRef = useRef(null);

  useEffect(() => {
    if (selectedSongRef.current) {
      selectedSongRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedSong]);

  return (
    <Wrapper>
      <Title>For You</Title>
      <Search setSearch={setSearch} search={search} />

      <ScrollableContainer>
        {isLoading ? (
          <SkeletonSong />
        ) : (
          data &&
          data.map((song, index) => (
            <Song
              // ref={selectedSong?._id === song._id ? selectedSongRef : null}
              selectedSong={selectedSong}
              setSelectedSong={setSelectedSong}
              key={index}
              data={song}
            />
          ))
        )}
      </ScrollableContainer>
    </Wrapper>
  );
};

export default MusicFinder;
