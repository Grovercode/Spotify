import React from "react";
import { DEVICE_TYPES, GET_PLAYLISTS } from "../../config/utils";
import { useQuery } from "@apollo/client";
import spotifyLogo from "../../assets/spotify-logo.svg";
import ProfileImage from "../../assets/profile.png";
import {
  Playlists,
  PlaylistsContainer,
  SkeletonContainer,
  SkeletonPlaylists,
  Wrapper,
} from "./styles";
import { useDevice } from "../../config/custom-hooks/useDevice";

const SkeletonPlaylistItem = () => (
  <SkeletonContainer>
    {[...Array(4)].map((_, index) => (
      <SkeletonPlaylists />
    ))}
  </SkeletonContainer>
);

const NavBar = ({
  selectedPlaylistId,
  setSelectedPlaylistId,
  showNavBar,
  setShowNavBar,
}) => {
  const { loading, error, data } = useQuery(GET_PLAYLISTS);
  const deviceType = useDevice();

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  const handlePlaylistClick = (playlistId) => {
    setSelectedPlaylistId(playlistId);
  };

  console.log("show navbar = ", showNavBar);

  return (
    <Wrapper isOpen={showNavBar}>
      <div>
        {deviceType === DEVICE_TYPES.MOBILE ? (
          <></>
        ) : (
          <img
            onClick={() => setSelectedPlaylistId(1)}
            src={spotifyLogo}
            alt="logo"
            style={{ cursor: "pointer" }}
          />
        )}
        {loading ? (
          <SkeletonPlaylistItem />
        ) : (
          <PlaylistsContainer>
            {data?.getPlaylists.map((playlist) => (
              <Playlists
                selected={playlist.id === selectedPlaylistId}
                key={playlist.id}
                onClick={() => handlePlaylistClick(playlist.id)}
              >
                {playlist.title}
              </Playlists>
            ))}
          </PlaylistsContainer>
        )}
      </div>

      <img
        style={{
          width: "48px",
          height: "48px",
          flexShrink: "0",
          borderRadius: "48px",
        }}
        src={ProfileImage}
        alt="profile"
      />
    </Wrapper>
  );
};

export default NavBar;
