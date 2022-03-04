import React, { useState, useEffect } from 'react';
import './TeamCard.css';
import { Container, Grid, Box, Typography } from '@mui/material';




const TeamCard = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('/teamData.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    return (
        <Container>
            <Typography>Meet our Teammates</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {teams.map((team) => (
                        <Grid item xs={12} sm={4} md={4} key={team.name}
                        >
                            <div className="ui-card">
                                <img src={team.img} alt="" />
                                <div className='description'>
                                    <h3>{team.name}</h3>
                                    <p>{team.description}</p>
                                    <a href="">Resume</a>
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