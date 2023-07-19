import React, { useRef, useEffect } from "react";
import {
  ScrollableContainer,
  Title,
  TitleContainer,
  Wrapper,
  CloseButton,
} from "./styles";
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
import { DEVICE_TYPES, PLAYLIST_MAPPER } from "../../config/utils";
import CloseButtonIcon from "../../assets/cross.png";
import OptionsButton from "../options-button";

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
  selectedPlaylistId,
  isLoading = false,
  deviceType,
  setShowSongs,
  color = null,
  showNavBar,
  setShowNavBar,
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
    <Wrapper color={color} deviceType={deviceType}>
      <TitleContainer deviceType={deviceType}>
        {deviceType === DEVICE_TYPES.MOBILE ? (
          setShowNavBar ? (
            <OptionsButton
              showNavBar={showNavBar}
              onClick={() => {
                setShowNavBar((prevState) => !prevState);
              }}
            />
          ) : (
            <div style={{ width: "40px" }} />
          )
        ) : (
          <></>
        )}

        <Title>{PLAYLIST_MAPPER[selectedPlaylistId]}</Title>

        <div>
          {deviceType === DEVICE_TYPES?.MOBILE ? (
            selectedSong ? (
              <CloseButton
                src={CloseButtonIcon}
                onClick={() => {
                  setShowSongs(false);
                }}
              />
            ) : (
              <div style={{ width: "28px" }} />
            )
          ) : (
            <div style={{ width: "28px" }} />
          )}
        </div>
      </TitleContainer>

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
