import { Button, ButtonBase, Container, Grid, Pagination, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
// import Banner from "../../SchoolDetails/Banner/Banner";
import { api } from "../../../Hooks/Api";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { ButtonStyle } from "../../../Hooks/useStyle";
const SchoolMain = () => {
  const [schools, setSchools] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`${api}/schools?page=${page}&limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setSchools(data?.data?.data);
        setSearchValue(data?.data?.data)
      });
  }, [page]);

  console.log(searchValue)
  const handleOnChange = (e) => {
    const value = e.target.value;
    const newValue = schools?.filter(s => s.schoolName.toLowerCase().includes(value.toLowerCase()) || s.location.toLowerCase().includes(value.toLowerCase()))
    setSearchValue(newValue)
  }


  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });



  return (
    <Container>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "500",
          fontSize: "30px",
          color: "#3B4757",
          textAlign: "center",
          py: 3,
        }}
        gutterBottom
        component="div"
      >
        All Schools in Bangladesh
      </Typography>



      <SearchBar handleOnChange={handleOnChange} />
      <Grid container spacing={2}>
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
                      {/* <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        {single.schoolName}
                      </Typography> */}

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
      </Grid>
      <Stack spacing={2}>

        <Pagination onChange={(e, value) => setPage(value)} count={schools.length} color="secondary" />

      </Stack>
    </Container>
  );
};

export default SchoolMain;
