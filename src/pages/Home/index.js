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
  useLayoutEffect(() => {
    setTimeout(() => {
      setSearch("");
    }, 100);
  }, [selectedPlaylistId]);

  const handleNext = () => {
    if (data?.getSongs?.length === 0) return;
    const currentIndex = data?.getSongs?.findIndex(
      (song) => song._id === selectedSong._id
    );

    if (currentIndex === -1) {
      // If the current song is not found, selecting the first song
      setSelectedSong(data?.getSongs[0]);
    } else if (currentIndex === data?.getSongs?.length - 1) {
      // If the current song is the last song, selecting the first song
      setSelectedSong(data?.getSongs[0]);
    } else {
      // Selecting the next song
      setSelectedSong(data?.getSongs[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (data?.getSongs?.length === 0) return;
    const currentIndex = data?.getSongs?.findIndex(
      (song) => song._id === selectedSong._id
    );

    if (currentIndex === -1) {
      // If the current song is not found, selecting the first song
      setSelectedSong(data?.getSongs[0]);
    } else if (currentIndex === 0) {
      // If the current song is the first song, selecting the last song
      setSelectedSong(data?.getSongs[data?.getSongs?.length - 1]);
    } else {
      // Selecting the previous song
      setSelectedSong(data?.getSongs[currentIndex - 1]);
    }
  };

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  return (
    <Wrapper
      background={`linear-gradient(135deg, ${color} 0%, #000 100%)`}
      id="Wrapper"
    >
      <NavBar
        selectedPlaylistId={selectedPlaylistId}
        setSelectedPlaylistId={setSelectedPlaylistId}
      />
      {loading && <>Loading</>}
      <Container id="Container">
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
          search={search}
          setSearch={setSearch}
          selectedSong={selectedSong}
          setSelectedSong={setSelectedSong}
        />

        {selectedSong && (
          <MusicPlayer
            selectedSong={selectedSong}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        )}
      </Container>
    </Wrapper>
  );
};

export default Home;
