import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import NavBar from "../../components/navBar";
import { Container, MusicPlayerContainer, Wrapper } from "./styles";
import { DEVICE_TYPES, GET_SONGS } from "../../config/utils";
import MusicFinder from "../../components/music-finder";
import { ColorExtractor } from "react-color-extractor";
import MusicPlayer from "../../components/music-player";
import { useEffect } from "react";
import { useDevice } from "../../config/custom-hooks/useDevice";
import ThreeLineButtonComponent from "../../components/options-button";
import MusicListIcon from "../../assets/music-list.png";

const Home = () => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(1);
  const [search, setSearch] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  const [color, setColor] = useState("#445c84");
  const [previousColor, setPrevousColor] = useState("FFF");
  const [showNavBar, setShowNavBar] = useState(false);
  const [showSongs, setShowSongs] = useState(false);
  const deviceType = useDevice();

  const { loading, error, data } = useQuery(GET_SONGS, {
    variables: {
      playlistId: selectedPlaylistId,
      search: search ? search : null,
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setSearch("");
    }, 100);
  }, [selectedPlaylistId]);

  const MusicFinderDialog = () => (
    <MusicFinder
      deviceType={DEVICE_TYPES.MOBILE}
      selectedPlaylistId={selectedPlaylistId}
      data={data?.getSongs}
      search={search}
      setSearch={setSearch}
      selectedSong={selectedSong}
      setSelectedSong={setSelectedSong}
      isLoading={loading}
      setShowSongs={setShowSongs}
      color={color}
      showNavBar={showNavBar}
      setShowNavBar={setShowNavBar}
    />
  );

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

  const checkMusicFinder = () => {
    if (deviceType === DEVICE_TYPES.MOBILE) {
      if (!selectedSong) return true;

      return false;
    }
    return true;
  };

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  return (
    <Wrapper
      animate={true}
      previousBackground={`linear-gradient(135deg, ${previousColor} 0%, #000 100%)`}
      background={`linear-gradient(135deg, ${color} 0%, #000 100%)`}
      id="Wrapper"
    >
      <NavBar
        selectedPlaylistId={selectedPlaylistId}
        setSelectedPlaylistId={setSelectedPlaylistId}
        showNavBar={showNavBar}
        setShowNavBar={setShowNavBar}
      />

      <Container deviceType={deviceType} id="Container">
        <ColorExtractor
          src={selectedSong?.photo}
          getColors={(colors) => {
            if (colors.length > 0) {
              setPrevousColor(color);
              setColor(colors[3]);
            }
          }}
        />
        {checkMusicFinder() && (
          <MusicFinder
            deviceType={deviceType}
            selectedPlaylistId={selectedPlaylistId}
            data={data?.getSongs}
            search={search}
            setSearch={setSearch}
            selectedSong={selectedSong}
            setSelectedSong={setSelectedSong}
            isLoading={loading}
            setShowSongs={setShowSongs}
            showNavBar={showNavBar}
            setShowNavBar={setShowNavBar}
          />
        )}
        <>
          <MusicPlayerContainer
            selectedSong={!!selectedSong}
            deviceType={deviceType}
            id="music-player"
          >
            {deviceType === DEVICE_TYPES.MOBILE && (
              <div
                style={{
                  display: "flex",
                  marginBottom: "40px",
                  flexDirection: "colmn",
                  justifyContent: "space-between",
                }}
              >
                <ThreeLineButtonComponent
                  showNavBar={showNavBar}
                  onClick={() => {
                    setShowNavBar((prevState) => !prevState);
                  }}
                />

                <img
                  onClick={() => {
                    setShowSongs(true);
                  }}
                  src={MusicListIcon}
                  width={"40px"}
                  height={"40px"}
                />
              </div>
            )}
            {selectedSong && (
              <MusicPlayer
                showSongs={showSongs}
                setShowSongs={setShowSongs}
                showNavBar={showNavBar}
                setShowNavBar={setShowNavBar}
                selectedSong={selectedSong}
                selectedPlaylistId={selectedPlaylistId}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                MusicFinderDialog={MusicFinderDialog}
                color={color}
              />
            )}
          </MusicPlayerContainer>
        </>
      </Container>
    </Wrapper>
  );
};

export default Home;
