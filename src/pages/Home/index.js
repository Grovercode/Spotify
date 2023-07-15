import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PLAYLISTS = gql`query ExampleQuery($playlistId: Int!, $search: String) {
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

  console.log(data)

  return (
    <div>
      <h1>Playlists</h1>
      <ul>
        {data?.getPlaylists.map((playlist) => (
          <li key={playlist?.id}>{playlist?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
