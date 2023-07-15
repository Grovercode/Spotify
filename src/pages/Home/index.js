import React, { useLayoutEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import NavBar from "../../components/navBar";
import { Container, Wrapper } from "./styles";
import { GET_SONGS } from "../../config/utils";
import MusicFinder from "../../components/music-finder";
import { ColorExtractor } from "react-color-extractor";

const Home = () => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(1);
  const [search, setSearch] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  const [startColor, setStartColor] = useState("#201606");

  const { loading, error, data } = useQuery(GET_SONGS, {
    variables: {
      playlistId: selectedPlaylistId,
      search: search ? search : null,
    },
  });

  useLayoutEffect(() => {
    document.body.style.background = `linear-gradient(135deg, ${startColor} 0%, #000 100%)`;
  }, [data, selectedPlaylistId, search, startColor]);

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  console.log("song data =", data?.getSongs);
  return (
    <Wrapper
      background={`linear-gradient(135deg, ${startColor} 0%, #000 100%)`}
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
              setStartColor(colors[3]);
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
      </Container>
    </Wrapper>
  );
};

export default Home;
