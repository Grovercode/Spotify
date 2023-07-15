import React, { useState } from "react";
import { InputContainer, InputField, SearchIcon } from "./styles";
import searchIcon from "../../../assets/search-icon.svg";

const Search = ({ setSearch }) => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    setSearch(searchText);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      setSearch("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <InputContainer>
      <InputField
        type="text"
        placeholder="Search Song, Artist"
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <SearchIcon
        src={searchIcon}
        alt="Search"
        onClick={(e) => handleSearch(e)}
      />
    </InputContainer>
  );
};

export default Search;
