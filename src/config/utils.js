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
