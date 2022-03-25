import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Pagination, Stack, Toolbar, Typography, } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../../Hooks/Api.js";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import SearchBar from "../../Shared/SearchBar/SearchBar.js";
import useAuth from "../../../Hooks/useAuth.js";
import { alert, ButtonStyleTaniay as ButtonStyleTania, loading } from "../../../Hooks/useStyle.js";


const SchoolListPage = () => {
  const [schools, setSchools] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [page, setPage] = useState(1);
  const { schoolsCount } = useAuth();

  useEffect(() => {
    fetch(`${api}/schools?page=${page}&limit=9`)
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


  const placeholder = 'Search by School Name or EIIN';
  return (

    <Box
      data-aos="fade-up"
    >
      <Container data-aos="fade-up"
        sx={{ py: 3 }}>
        <SearchBar handleOnChange={handleOnChange} placeholder={placeholder} />
        <Toolbar />
        {schools.length === 0 ? loading :
          <Grid container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>


            {searchValue?.map((dt) => (
              <Grid key={dt.id} item xs={4} sm={4} md={4}>

                <Card
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  sx={{
                    background: "#fff",
                    display: 'flex', justifyContent: 'space-between', flexDirection: 'column',
                    boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                    borderRadius: "12px",
                  }}>
                  <CardActionArea>
                    <Box
                      sx={{
                        transition: "transform .5s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    ><CardMedia
                        component="img"
                        sx={{
                          height: "200px",
                          verticalAlign: "top",
                          borderRadius: "10px",
                          margin: "auto",
                          aspectRatio: "auto 1200 / 1200"
                        }}
                        image={dt?.schoolPhoto}
                        alt="green iguana"
                      /></Box>
                    <CardContent>
                      <Typography
                        sx={{ color: "#3B4757", textAlign: "center", fontSize: "14px" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {dt?.schoolName}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#777",
                          fontSize: "15px",
                          textAlign: "center",
                        }}
                        variant="body2"
                        color="text.secondary"
                      >
                        <AddLocationIcon
                          sx={{ fontSize: { xs: "14px" }, color: "#46AADC" }}
                        />{" "} {dt?.location}
                      </Typography>

                      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                        <NavLink
                          to={`/details/${dt?._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            sx={ButtonStyleTania}
                            variant="outlined"
                          >
                            Details
                          </Button>

                        </NavLink>
                      </Box>

                    </CardContent>
                  </CardActionArea>
                </Card>

              </Grid>
            ))}
          </Grid>}

        <Toolbar />
        <Stack spacing={2}>

          <Pagination onChange={(e, value) => setPage(value)}
            count={Math.ceil(schoolsCount / 9)}
            color="secondary"
            showFirstButton
            showLastButton
          />

        </Stack>
      </Container>
    </Box>
  );
};

export default SchoolListPage;