import React from "react";
import { Title, Wrapper } from "./styles";
import Search from "./search";
import Song from "./song";
import { Scrollbars } from "react-custom-scrollbars";

const MusicFinder = ({ setSearch, data, selectedSong, setSelectedSong }) => {
  return (
    <Wrapper>
      <Title>For You</Title>
      <Search setSearch={setSearch} />
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        style={{ maxHeight: "80%", marginTop: "25px" }}
      >
        {data &&
          data.map((song, index) => (
            <Song
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
