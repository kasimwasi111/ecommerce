import styled from "@emotion/styled";
import { InputBase } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const SearchContainer = styled(Box)`
  background: #fff;
  display: flex;
  width: 34%;
  border-radius: 2px;
  margin-left: 10px;
`;
const SearchArea = styled(InputBase)`
  padding-left: 20px;
  padding-right: 10px;
  width: 100%;
  font-size: unset;
`;
const SearchiconWrapper = styled(Box)`
  color: blue;
  padding-top: 5px;
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchArea placeholder="search for anything" />
      <SearchiconWrapper></SearchiconWrapper>
    </SearchContainer>
  );
};

export default SearchBar;
