import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from "../../../Hooks/Api";
import { Box, Container, Typography } from "@mui/material";

const BasicSchoolInfo = () => {
    const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`${api}/schools/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.data.data));
  }, [id]);
    return (
        <Container >
        <Box 
          
        >
        </Box>
  
        <Box
          sx={{
            p: {xm:"30px 10px 30px 10px",sx:"50px 30px 50px 30px",md:"80px 50px 80px 50px"},
            backgroundColor: "#FFFFFF",
           
            
            borderWidth: {xm:"0px 0px 0px 0px",sm:"0px 0px 0px 0px",md:"0px 0px 0px 2px"},
            borderColor: "rgb(42 135 158 / 14%)",
            boxShadow: {xm:"0px ",sm:"0px ",md:"0px 14px 22px rgb(42 135 158 / 14%)"},
            display: "block",
          
            // ml: { md: 25 },
            borderRadius: "0px 200px 0px 200px",
            mx: { xs: "auto", sm: "auto" },
          }}
        >
          <Typography sx={{fontSize:{sx:"5px",sm:"12px",md:"16px"},textAlign:"justify",color:"#0c4b65",fontWeight:400}} variant="subtitle1" gutterBottom component="div">
           
              {details?.schoolName}
           
            is a academic institute located at <span style={{color:"#0c4b65",fontWeight:600}}>{details?.location}</span> . Its institute code (EIIN) is <span style={{color:"#0c4b65",fontWeight:600}}>{details?.EIIN}</span>. It was established on <span style={{color:"#0c4b65",fontWeight:600}}>{details?.founderDate}</span>. Its co-education type is <span style={{color:"#0c4b65",fontWeight:600}}>{details?.schoolType}</span>. The location of the school is <span style={{color:"#0c4b65",fontWeight:600}}>{details?.location}</span>.
           
          </Typography>
          
        </Box>
        
      </Container>
    );
};

export default BasicSchoolInfo;