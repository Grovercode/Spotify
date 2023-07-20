import React from "react";
import { InputContainer, InputField, SearchIcon } from "./styles";
import searchIcon from "../../../assets/search-icon.svg";

const Search = ({ setSearch, search, selectedSong }) => {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <InputContainer selectedSong={selectedSong}>
      <InputField
        type="text"
        placeholder="Search Song, Artist"
        value={search}
        onChange={handleInputChange}
        autoFocus={search ? true : false}
      />
      <SearchIcon src={searchIcon} alt="Search" />
    </InputContainer>
  );
};

export default Search;
