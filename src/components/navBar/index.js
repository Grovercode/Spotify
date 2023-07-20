import React, { useEffect, useState } from "react";
import { DEVICE_TYPES, GET_PLAYLISTS } from "../../config/utils";
import { useQuery } from "@apollo/client";
import spotifyLogo from "../../assets/spotify-logo.svg";
import ProfileImage from "../../assets/profile.png";
import {
  CloseButton,
  HeaderContainer,
  Logo,
  Playlists,
  PlaylistsContainer,
  SkeletonContainer,
  SkeletonPlaylists,
  Wrapper,
} from "./styles";
import { useDevice } from "../../config/custom-hooks/useDevice";
import CloseIcon from "../../assets/cross.png";
import { Menu } from "../../pages/Home/styles";

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
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes("firefox"));
  }, []);

  const deviceType = useDevice();

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  const handlePlaylistClick = (playlistId) => {
    setSelectedPlaylistId(playlistId);
  };

  return (
    <Wrapper isFirefox={isFirefox} isOpen={showNavBar}>
      <div>
        {deviceType === DEVICE_TYPES.MOBILE ? (
          <HeaderContainer>
            <Logo
              onClick={() => setSelectedPlaylistId(1)}
              src={spotifyLogo}
              height={"32px"}
              alt="logo"
            />

            <CloseButton
              src={CloseIcon}
              onClick={() => {
                setShowNavBar((prevState) => !prevState);
              }}
            />
          </HeaderContainer>
        ) : (
          <Logo
            onClick={() => setSelectedPlaylistId(1)}
            src={spotifyLogo}
            alt="logo"
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
