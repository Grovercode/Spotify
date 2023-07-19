import { gql } from "@apollo/client";

export const GET_PLAYLISTS = gql`
  query GetPlaylists {
    getPlaylists {
      id
      title
    }
  }
`;

export const GET_SONGS = gql`
  query GetSongs($playlistId: Int!, $search: String) {
    getSongs(playlistId: $playlistId, search: $search) {
      _id
      artist
      duration
      photo
      title
      url
    }
  }
`;

// Function to convert duration to "mm:ss" format
export const formatDuration = (duration) => {
  const minutes = Math.floor(duration / 100);
  const seconds = duration % 100;
  return `${minutes}:${seconds}`;
};

export const DEVICE_TYPES = {
  MOBILE: "mobile",
  TABLET: "tablet",
  DESKTOP: "desktop",
};

export const PLAYLIST_MAPPER = {
  1: "For You",
  2: "Top Tracks",
  3: "Favourites",
  4: "Recently Played",
};
