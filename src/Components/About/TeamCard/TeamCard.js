import React, { useState, useEffect } from 'react';
import './TeamCard.css';
import { Container, Grid, Box, Typography, Avatar, ButtonBase } from '@mui/material';
import Aos from 'aos';
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";




const TeamCard = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    }, []);
    useEffect(() => {
        fetch('/teamData.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    return (
        <Container sx={{ marginTop: '20px' }}>
            <Typography
                sx={{ fontWeight: "600", fontSize: 24, color: "#3B4757", textAlign: "center", marginBottom:3, marginTop: 14 }}
                variant="h4"
            >BUILDING TEAM</Typography>
             <Typography
                sx={{ fontWeight: "600", fontSize: 38, color: "#3B4757", textAlign: "center", marginBottom: 16}}
                variant="h4"
            >The Talented People Behind The Scenes </Typography>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {teams.map((team) => (
                        <Grid

                            item xs={12} sm={4} md={4} key={team.name}
                        >
                             <Box sx={{background: "#fff",boxShadow: "22px 14px 22px rgb(42 135 158 / 14%)",borderRadius: "12px"}}>
                  <Box >
                  <Avatar
               
                src={team?.img}
                style={{
                    width: 180,
                    height: 180,
                    objectFit:"cover",
                    border: "1px solid lightgray",
                    marginTop:10,
                    backgroundColor: "pink",
                  
                    margin:" 0px  auto "
                }}
            />
                  </Box>
                  <Box>
                  <Typography variant="body1" sx={{textAlign:"center",mt:4,color:"#0c4b65",fontSize:"24px",fontWeight:800}} gutterBottom>
        {team?.title}
      </Typography>
      
                  <Typography variant="h5" sx={{textAlign:"center",fontWeight:500}}> {team?.name}</Typography>
                  <Typography variant="h6" sx={{textAlign:"center",fontWeight:400,mt:1}} gutterBottom>{team?.description}</Typography>
                 
          <Box sx={{textAlign:"center",mt:2,color:"#0c4b65"}}>
          <ButtonBase>
          <a href={team.linkedin} target="blank"> <LinkedInIcon sx={{ fontSize: "30px", cursor: "pointer", p:2, color:"#0a66c2" }} /></a>
         
        </ButtonBase>
        <ButtonBase>
        <a href={team.github} target="blank"><GitHubIcon sx={{ fontSize: "30px", cursor: "pointer", color: "black" }} /></a>
        </ButtonBase>
        <ButtonBase>
        <a href={team.facebook} target="blank"><FacebookRoundedIcon sx={{ fontSize: "30px", cursor: "pointer", p:2 , color:"#3578E5"}} /></a>
        </ButtonBase>
        <ButtonBase>
        <a href={team.email} target="blank"> <EmailIcon sx={{ fontSize: "30px", cursor: "pointer" }} /></a>
        </ButtonBase>
</Box>

                  </Box>
                </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container >

    );
};

export default TeamCard;