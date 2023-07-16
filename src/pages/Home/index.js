import React, { useLayoutEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import NavBar from "../../components/navBar";
import { Container, Wrapper } from "./styles";
import { GET_SONGS } from "../../config/utils";
import MusicFinder from "../../components/music-finder";
import { ColorExtractor } from "react-color-extractor";
import MusicPlayer from "../../components/music-player";

const Home = () => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(1);
  const [search, setSearch] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  const [color, setColor] = useState("#201606");

  const { loading, error, data } = useQuery(GET_SONGS, {
    variables: {
      playlistId: selectedPlaylistId,
      search: search ? search : null,
    },
  });

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  const handleNext = () => {};

  const handlePrevious = () => {};

  console.log("song data =", data?.getSongs);
  return (
    <Wrapper
      background={`linear-gradient(135deg, ${color} 0%, #000 100%)`}
      id="wrapper"
    >
      {loading && <>Loading</>}
      <Container id="Container">
        <NavBar
          selectedPlaylistId={selectedPlaylistId}
          setSelectedPlaylistId={setSelectedPlaylistId}
        />
        <ColorExtractor
          src={selectedSong?.photo}
          getColors={(colors) => {
            if (colors.length > 0) {
              setColor(colors[3]);
            }
          }}
        />
        <MusicFinder
          selectedPlaylistId={selectedPlaylistId}
          data={data?.getSongs}
          setSearch={setSearch}
          selectedSong={selectedSong}
          setSelectedSong={setSelectedSong}
        />

        {selectedSong && (
          <MusicPlayer
            setSelectedSong={setSelectedSong}
            selectedSong={selectedSong}
          />
        )}
      </Container>
    </Wrapper>
  );
};

export default Home;
