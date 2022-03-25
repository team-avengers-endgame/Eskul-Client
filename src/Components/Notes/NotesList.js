/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import './NotesLIst.css'
import { Box, Container, Grid, Typography } from "@mui/material";

const NotesList = () => {

    const [notes, setNotes] = useState([])
    useEffect(() => {
        fetch('/notesData.json')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])
    // noteslist
    return (

        <Container>
            <Typography variant="h4" sx={{ margin: "10px", fontWeight: 'bold', textAlign: 'center' }} >Download your Notes</Typography>
            <Box sx={{ mx: 'auto' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {notes.map((note) => (
                        <Grid item spacing={{ xs: 2, md: 3 }} xs={12} sm={4} md={4} key={note.name}
                        >
                            <div >
                                <div className="card">
                                    <img className="pro-pic" src={note.img} alt="" />
                                    <div className="desciption-wrap">
                                        <div className="description">
                                            <h3>{note.name}</h3>
                                            <h4>{note.sub}</h4>
                                            <ul>
                                                <li>
                                                    <a className="anchor" href="https://drive.google.com/file/d/1C0_xRXDn2fsWeYKfjyDUthb944uIclwx/view?usp=sharing" target="_blank" download>Download PDF
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>















        // <Card sx={{ maxWidth: 345 }}>
        //     <CardMedia
        //         component="img"
        //         alt="green iguana"
        //         height="140"
        //         image="https://i.ibb.co/GHSk8Q6/3-funny-hello-first-grade-first-day-of-first-grade-yestic.jpg"
        //     />
        //     <CardContent>
        //         <Typography gutterBottom variant="h5" component="div">
        //             Lizard
        //         </Typography>
        //         <Typography variant="body2" color="text.secondary">
        //             Lizards are a widespread group of squamate reptiles, with over 6,000
        //             species, ranging across all continents except Antarctica
        //         </Typography>
        //     </CardContent>
        //     <CardActions>
        //         <a href="https://drive.google.com/file/d/1C0_xRXDn2fsWeYKfjyDUthb944uIclwx/view?usp=sharing" target="_blank" download>See My Resume
        //         </a>
        //     </CardActions>
        // </Card>
    );
}


export default NotesList;

