import React, { useState } from "react";
import { InputContainer, InputField, SearchIcon } from "./styles";
import searchIcon from "../../../assets/search-icon.svg";

const Search = ({ setSearch, search }) => {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <InputContainer>
      <InputField
        type="text"
        placeholder="Search Song, Artist"
        value={search}
        onChange={handleInputChange}
      />
      <SearchIcon src={searchIcon} alt="Search" />
    </InputContainer>
  );
};

export default Search;
