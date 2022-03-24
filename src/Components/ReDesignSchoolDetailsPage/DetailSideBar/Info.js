import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from "../../../Hooks/Api";
import { Container, Grid, Typography, } from '@mui/material';
const Info = () => {
  const [infos, setInfos] = useState([])
  const { id } = useParams();
  useEffect(() => {
    fetch(`${api}/schools/${id}`)
      .then((res) => res.json())
      .then((data) => setInfos(data.data.data));

  }, [id]);

  return (
    <Container >

      <Grid container spacing={6}>
        <Grid item xs={6} sm={6} md={6} >
          <Typography sx={{ color: "#0c4b65", fontWeight: 600, fontSize: { sx: "5px", sm: "12px", md: "16px" } }} variant="h6" gutterBottom component="div">
            Alternative Name
          </Typography>
          <Typography
            sx={{ color: "#0c4b65", fontSize: { sx: "5px", sm: "12px", md: "16px" } }}
            variant="subtitle1"
            gutterBottom
            component="div"
          >
            {infos?.schoolName}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Typography sx={{ color: "#0c4b65", fontWeight: 600, letterSpacing: "1px", fontSize: { sx: "5px", sm: "12px", md: "16px" } }} variant="h6" gutterBottom component="div">
            School Shift
          </Typography>
          <Typography sx={{ color: "#0c4b65", fontSize: { sx: "5px", sm: "12px", md: "16px" } }} variant="subtitle1" gutterBottom component="div">
            {infos?.schoolShift}
          </Typography>

        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Typography sx={{ color: "#0c4b65", fontWeight: 600, letterSpacing: "1px", fontSize: { sx: "5px", sm: "12px", md: "16px" } }} variant="h6" gutterBottom component="div">
            Founded
          </Typography>
          <Typography sx={{ color: "#0c4b65", fontSize: { sx: "5px", sm: "12px", md: "16px" } }} variant="subtitle1" gutterBottom component="div">
            {infos?.founderDate}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Typography sx={{ color: "#0c4b65", fontWeight: 600, letterSpacing: "1px", fontSize: { sx: "5px", sm: "12px", md: "16px" } }} variant="h6" gutterBottom component="div">
            Location
          </Typography>
          <Typography sx={{ color: "#0c4b65", fontSize: { sx: "5px", sm: "12px", md: "16px" } }} variant="subtitle1" gutterBottom component="div">
            {infos?.location}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Typography sx={{ color: "#0c4b65", fontWeight: 600, letterSpacing: "1px", fontSize: { sx: "5px", sm: "12px", md: "16px" } }} variant="h6" gutterBottom component="div">
            Type
          </Typography>
          <Typography sx={{ color: "#0c4b65", fontSize: { sx: "5px", sm: "12px", md: "16px" } }} variant="subtitle1" gutterBottom component="div">
            {infos?.schoolType}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Typography sx={{ color: "#0c4b65", fontWeight: 600, letterSpacing: "1px", fontSize: { sx: "5px", sm: "12px", md: "16px" } }} variant="h6" gutterBottom component="div">
            EIIN
          </Typography>
          <Typography sx={{ color: "#0c4b65", fontSize: { sx: "5px", sm: "12px", md: "16px" } }} variant="subtitle1" gutterBottom component="div">
            {infos?.EIIN}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Info;