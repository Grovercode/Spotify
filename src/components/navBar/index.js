import React from "react";
import { GET_PLAYLISTS } from "../../config/utils";
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

const SkeletonPlaylistItem = () => (
  <SkeletonContainer>
    {[...Array(4)].map((_, index) => (
      <SkeletonPlaylists />
    ))}
  </SkeletonContainer>
);

// const ThreeLineButtonComponent = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const handleClick = () => {
//     setIsOpen(!isOpen);
//     onClick();
//   };
//   return (
//     <ThreeLineButton isOpen={isOpen} onClick={handleClick}>
//       <Line isOpen={isOpen} />
//       <Line isOpen={isOpen} />
//       <Line isOpen={isOpen} />
//     </ThreeLineButton>
//   );
// };

const NavBar = ({ selectedPlaylistId, setSelectedPlaylistId }) => {
  const { loading, error, data } = useQuery(GET_PLAYLISTS);

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  const handlePlaylistClick = (playlistId) => {
    setSelectedPlaylistId(playlistId);
  };

  return (
    <Wrapper>
      <div>
        <img
          onClick={() => setSelectedPlaylistId(1)}
          src={spotifyLogo}
          alt="logo"
          style={{ cursor: "pointer" }}
        />
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
