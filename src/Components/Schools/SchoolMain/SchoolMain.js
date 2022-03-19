import { Button, ButtonBase, Container, Grid, Pagination, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

import { NavLink } from "react-router-dom";
import { api } from "../../../Hooks/Api";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { alert, ButtonStyle, loading } from "../../../Hooks/useStyle";
import SearchBar from "../../Shared/SearchBar/SearchBar";
import useAuth from "../../../Hooks/useAuth";
const SchoolMain = () => {
  const [schools, setSchools] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [page, setPage] = useState(1);
  const { schoolsCount } = useAuth();

  useEffect(() => {
    fetch(`${api}/schools?page=${page}&limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setSchools(data?.data?.data);
        setSearchValue(data?.data?.data)
      });
  }, [page]);

  const handleOnChange = (e) => {

    const value = e.target.value;
    const newValue = schools?.filter(s => s.schoolName.toLowerCase().includes(value.toLowerCase()) || s.location.toLowerCase().includes(value.toLowerCase()))
    newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
    setSearchValue(newValue)
  }


  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const placeholder = 'Search by School Name or EIIN';

  return (
    <Container>

      <SearchBar handleOnChange={handleOnChange} placeholder={placeholder} />

      {schools.length === 0 ?loading:
        <Grid container spacing={2} sx={{ mt: 6 }}>
          {searchValue?.map((single) => (
            <Grid sx={{ py: 3 }} key={single._id} item xs={12} sm={12} md={6}>
              <Paper
                sx={{
                  p: 2,
                  margin: "auto",
                  maxWidth: 500,
                  flexGrow: 1,
                  // boxShadow: "0px 14px 22px rgb(42 135 158 / 10%)",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <NavLink to={`/details/${single._id}`}>
                      <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src={single.schoolPhoto} />
                      </ButtonBase>
                    </NavLink>
                  </Grid>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          sx={{ mt: { xs: 1 } }}
                          variant="body2"
                          gutterBottom
                        >
                          {single.schoolName}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                          <AddLocationIcon
                            sx={{ fontSize: { xs: "14px" }, color: "#46AADC" }}
                          />{" "}
                          {single.location}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <NavLink
                          to={`/details/${single._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            size='small'
                            sx={{ ...ButtonStyle }}

                          >
                            Details
                          </Button>
                        </NavLink>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>}
      <Stack spacing={2}>

        <Pagination onChange={(e, value) => setPage(value)}
          count={Math.round(schoolsCount / 10)}
          color="secondary"
          showFirstButton
          showLastButton
        />

      </Stack>
    </Container>
  );
};

export default SchoolMain;
