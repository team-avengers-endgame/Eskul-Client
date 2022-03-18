import {
    Box,
   
    Button,
   
    Card,
   
    CardActionArea,
   
    CardContent,
   
    CardMedia,
   
    Container,
    Grid,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { NavLink } from "react-router-dom";
  import { api } from "../../../Hooks/Api.js";
  import AddLocationIcon from "@mui/icons-material/AddLocation";
  import SearchBar from "../../Shared/SearchBar/SearchBar.js";
  import Aos from 'aos';
const SchoolListPage = () => {
    const [schools, setSchools] = useState([]);
  useEffect(() => {
    fetch(`${api}/schools`)
      .then((res) => res.json())
      .then((data) => setSchools(data?.data?.data));
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 4000
    });
  }, []);
  const placeholder = 'Search by School Name or EIIN';
    return (
        
        <Box 
        
        data-aos="fade-up"
        data-aos-duration="2000">
        
            <Container data-aos="fade-up"
        data-aos-duration="2000" sx={{py:3}}>
            <SearchBar   placeholder={placeholder} />

            <Grid container sx={{mt:2}} spacing={6}>
             
              
             {schools.map((dt) =>  (
               <Grid key={dt.id} item xs={12} sm={12} md={4}>
                 
                   <Card sx={{  background: "#fff",
                    display: 'flex', justifyContent: 'space-between', flexDirection: 'column',
                     boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                     borderRadius: "12px",
                      }}>
                     <CardActionArea>
                       <Box
                       sx={{transition: "transform .5s ease",
                       "&:hover": {
                         transform: "scale(1.1)",
                       },}}
                       ><CardMedia
                         component="img"
                         sx={{  
                         height: "200px",
                         
                         verticalAlign: "top",
                         borderRadius: "10px",
                         margin:"auto",
                         aspectRatio: "auto 1200 / 1200" }}
                         image={dt?.schoolPhoto}
                         alt="green iguana"
                       /></Box>
                       <CardContent>
                         <Typography
                           sx={{ color: "#3B4757", textAlign: "center",fontSize:"14px" }}
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
                         
                         <NavLink
                             to={`/details/${dt?._id}`}
                             style={{ textDecoration: "none" }}
                           > <Box sx={{ display: "flex", justifyContent: "center",mt:2 }}><Button
                           sx={{
                              color: "#fff",
                              flexBasis: "initial",
                              minHeight: "40px",
                              fontFamily: "Sans-serif",
                              fontSize: "15px",
                              textTransform: "capitalize",
                              letterSpacing: "1px",
                              backgroundImage: "linear-gradient(to right bottom, rgba(126,213,111,0.85), rgba(40,180,133,0.85))",
                              borderStyle: "solid",
                              borderWidth: "1px 1px 1px 1px",
                              borderColor: "#01479b",
                              paddingTop: 0,
                              paddingBottom: 0,
                              border: "none",
                              padding: "12px 24px",
                              display: "inlineBlock",
                              lineHeight: 1,
                              borderRadius: "5px",
                              fill: "#FFFFFF",
                              textAlign: "center",
                              fontWeight: 500,
                              whiteSpace: "nowrap",
                            
                              width: "auto",
                              mb: 2,
                              overflow: "visible",
                              
                            }}
                            variant="outlined"
                            type="submit"
                          >
                            Submit
                          </Button></Box>
                             
                           </NavLink>
                       </CardContent>
                     </CardActionArea>
                   </Card>
                   
               </Grid> 
             ))}
           </Grid>
            </Container>
      
          </Box>
    );
};

export default SchoolListPage;