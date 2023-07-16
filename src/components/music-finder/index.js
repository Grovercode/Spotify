import React, { useRef, useEffect } from "react";
import { ScrollableContainer, Title, Wrapper } from "./styles";
import Search from "./search";
import Song from "./song";

const MusicFinder = ({
  setSearch,
  search,
  data,
  selectedSong,
  setSelectedSong,
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
        {data &&
          data.map((song, index) => (
            <Song
              // ref={selectedSong?._id === song._id ? selectedSongRef : null}
              selectedSong={selectedSong}
              setSelectedSong={setSelectedSong}
              key={index}
              data={song}
            />
          ))}
      </ScrollableContainer>
    </Wrapper>
  );
};

export default MusicFinder;
