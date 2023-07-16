import React, { useRef, useEffect } from "react";
import { Title, Wrapper } from "./styles";
import Search from "./search";
import Song from "./song";
import { Scrollbars } from "react-custom-scrollbars";

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
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        style={{ maxHeight: "80%", marginTop: "25px" }}
      >
        {data &&
          data.map((song, index) => (
            <Song
              ref={selectedSong?._id === song._id ? selectedSongRef : null}
              selectedSong={selectedSong}
              setSelectedSong={setSelectedSong}
              key={index}
              data={song}
            />
          ))}
      </Scrollbars>
    </Wrapper>
  );
};

export default MusicFinder;
