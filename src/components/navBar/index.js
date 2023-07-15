import React from "react";
import { GET_PLAYLISTS } from "../../config/utils";
import { useQuery } from "@apollo/client";
import spotifyLogo from "../../assets/spotify-logo.svg";
import ProfileImage from "../../assets/profile.png";
import {
  Playlists,
  PlaylistsContainer,
  ProfilePicture,
  Wrapper,
} from "./styles";

const NavBar = ({ selectedPlaylistId, setSelectedPlaylistId }) => {
  const { loading, error, data } = useQuery(GET_PLAYLISTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  const handlePlaylistClick = (playlistId) => {
    setSelectedPlaylistId(playlistId);
  };

  console.log("Navbar data = ", data?.getPlaylists);
  return (
    <Wrapper>
      <div>
        <img src={spotifyLogo} alt="logo" />
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
