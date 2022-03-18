import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { api } from "../../../../Hooks/Api";
import {Box,Button,Card,CardActionArea,CardContent,CardMedia,Container,Grid,Typography,} from "@mui/material";
import Aos from 'aos';
const Teachers = () => {
    const { id } = useParams();
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch(`${api}/schools/${id}`)
      .then((res) => res.json())
      .then((data) => setTeachers(data?.data?.data.teachers));
  }, [id]);
    return (
        <Box 
        
        data-aos="fade-up"
        data-aos-duration="2000">
        
            <Container data-aos="fade-up"
        data-aos-duration="2000" sx={{py:3}}>
           

            <Grid container sx={{mt:2}} spacing={6}>
             
              
             {teachers.map((dt) =>  (
               <Grid key={dt._id} item xs={12} sm={12} md={4}>
                 
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
                         image={dt?.teacherPhoto}
                         alt="green iguana"
                       /></Box>
                       <CardContent>
                         <Typography
                           sx={{ color: "#3B4757", textAlign: "center",fontSize:"14px" }}
                           gutterBottom
                           variant="h5"
                           component="div"
                         >
                           {dt?.teacherName}
                         </Typography>
                         
                         <Typography sx={{textAlign: "center",}} variant="body2" color="text.secondary">
                        {" "}
                        {dt.designation}
                      </Typography>
                         <NavLink
                             to={`/teacherDetails/${dt._id}`}
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
                            Details
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

export default Teachers;