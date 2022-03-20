import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from "../../../Hooks/Api";
import { Box, Container, Grid, Table, TableCell,TableRow, Typography,  } from '@mui/material';
const Info = () => {
    const [infos,setInfos] = useState([])
    const { id } = useParams();
    useEffect(() => {
        fetch(`${api}/schools/${id}`)
          .then((res) => res.json())
          .then((data) => setInfos(data.data.data));
          
      }, [id]);
     
    return (
        <Container >
           {/* <Table sx={{ minWidth: {
               xs:250,sm:350,md:350
           }}} aria-label="simple table">
     
          <TableRow>
            <TableCell>Alternative Name</TableCell>
            <TableCell align="right">{infos.schoolName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>EIIN Number</TableCell>
            <TableCell align="right">{infos.EIIN}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Founder Date</TableCell>
            <TableCell align="right">{infos.founderDate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>School Type</TableCell>
            <TableCell align="right">{infos.schoolType}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Location Name</TableCell>
            <TableCell align="right">{infos.location}</TableCell>
          </TableRow>
        
      </Table> */}
      <Grid container  spacing={6}>
            <Grid item xs={6} sm={6} md={6} >
              <Typography sx={{color:"#0c4b65",fontWeight:600,fontSize:{sx:"5px",sm:"12px",md:"16px"}}} variant="h6" gutterBottom component="div">
                Alternative Name
              </Typography>
              <Typography
                sx={{ color: "#0c4b65",fontSize:{sx:"5px",sm:"12px",md:"16px"} }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                {infos?.schoolName}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
            <Typography sx={{color:"#0c4b65",fontWeight:600, letterSpacing: "1px",fontSize:{sx:"5px",sm:"12px",md:"16px"}}} variant="h6" gutterBottom component="div">
                School Shift
              </Typography>
              <Typography sx={{color:"#0c4b65",fontSize:{sx:"5px",sm:"12px",md:"16px"}}} variant="subtitle1" gutterBottom component="div">
                {infos?.schoolShift}
              </Typography>
              
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Typography sx={{color:"#0c4b65",fontWeight:600, letterSpacing: "1px",fontSize:{sx:"5px",sm:"12px",md:"16px"}}} variant="h6" gutterBottom component="div">
                Founded
              </Typography>
              <Typography sx={{color:"#0c4b65",fontSize:{sx:"5px",sm:"12px",md:"16px"}}} variant="subtitle1" gutterBottom component="div">
                {infos?.founderDate}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Typography sx={{color:"#0c4b65",fontWeight:600, letterSpacing: "1px",fontSize:{sx:"5px",sm:"12px",md:"16px"}}} variant="h6" gutterBottom component="div">
                Location
              </Typography>
              <Typography sx={{color:"#0c4b65",fontSize:{sx:"5px",sm:"12px",md:"16px"}}} variant="subtitle1" gutterBottom component="div">
                {infos?.location}
              </Typography>
            </Grid>
            <Grid item  xs={6} sm={6} md={6}>
              <Typography sx={{color:"#0c4b65",fontWeight:600, letterSpacing: "1px",fontSize:{sx:"5px",sm:"12px",md:"16px"}}} variant="h6" gutterBottom component="div">
                Type
              </Typography>
              <Typography sx={{color:"#0c4b65",fontSize:{sx:"5px",sm:"12px",md:"16px"}}} variant="subtitle1" gutterBottom component="div">
                {infos?.schoolType}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
            <Typography sx={{color:"#0c4b65",fontWeight:600, letterSpacing: "1px",fontSize:{sx:"5px",sm:"12px",md:"16px"}}} variant="h6" gutterBottom component="div">
                EIIN
              </Typography>
              <Typography sx={{color:"#0c4b65",fontSize:{sx:"5px",sm:"12px",md:"16px"}}} variant="subtitle1" gutterBottom component="div">
                {infos?.EIIN}
              </Typography>
            </Grid>
          </Grid>
        </Container>
    );
};

export default Info;