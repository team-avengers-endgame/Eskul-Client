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
        p: {
          xs: "2px 8px",
          sm: "2px 8px",
          md: "8px 16px",
        },
        mb: 6,
        mx: "auto",
        display: "flex",
        alignItems: "center",
        width: {
          xs: "80%",
          sm: "80%",
          md: "50%",
        },
        border: "4px solid #46AADC",
        borderRadius: "50px",
        // boxShadow: "0px 14px 22px rgb(42 135 158 / 7%)",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          mx: "auto",
          fontSize: {
            xs: "12px",
            sm: "15px",
            md: "20px",
          },
          p: "3px 5px",
        }}
        placeholder="Search by School Name or EIIN"
        inputProps={{ "aria-label": "search school" }}
      />
      <IconButton
        type="submit"
        sx={{
          p: "5px",
          color: "#46AADC",
          fontWeight: "bold",
        }}
        aria-label="search"
      >
        <SearchIcon
          sx={{
            fontSize: {
              xs: "25px",
              sm: "30px",
              md: "35px",
            },
          }}
        />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
