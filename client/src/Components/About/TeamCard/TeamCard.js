import React, { useState, useEffect } from 'react';
import './TeamCard.css';
import { Container, Grid, Box, Typography, Divider } from '@mui/material';
import Aos from 'aos';




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
                sx={{ fontWeight: "600", fontSize: 44, color: "#3B4757", textAlign: "center", marginBottom: 16, marginTop: 14 }}
                variant="h4"
            >Meet our Teammates</Typography>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {teams.map((team) => (
                        <Grid

                            item xs={12} sm={4} md={4} key={team.name}
                        >
                            <div
                                data-aos="zoom-in"
                                className="ui-card">
                                <img src={team.img} alt="" />
                                <div className='description'>
                                    <h3>{team.name}</h3>
                                    <p>{team.description}</p>
                                    <a href={team.contact}>Resume</a>
                                </div>

                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container >

    );
};

export default TeamCard;