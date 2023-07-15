import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import NavBar from "../../components/navBar";
import { Wrapper } from "./styles";

const GET_PLAYLISTS = gql`
  query ExampleQuery($playlistId: Int!, $search: String) {
    _empty
    getPlaylists {
      id
      title
    }
    getSongs(playlistId: $playlistId, search: $search) {
      _id
      artist
      duration
      photo
      title
      url
    }
    getCategories
  }
`;

const Home = () => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(1);
  const { loading, error, data } = useQuery(GET_PLAYLISTS, {
    variables: {
      playlistId: 2,
      search: null,
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  return (
    <Wrapper>
      <NavBar
        selectedPlaylistId={selectedPlaylistId}
        setSelectedPlaylistId={setSelectedPlaylistId}
      />
      <div>
        <h1>Music player</h1>
      </div>
    </Wrapper>
  );
};

export default Home;
