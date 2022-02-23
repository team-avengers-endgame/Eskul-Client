import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
// search
const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "8px 16px",
        mb: 6,
        display: "flex",
        alignItems: "center",
        width: "100%",
        border: "1px solid pink",
        boxShadow: "0px 14px 22px rgb(42 135 158 / 7%)",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, mx: "auto", fontSize: "20px", p: "3px 5px" }}
        placeholder="Search by School Name or EIIN"
        inputProps={{ "aria-label": "search school" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
