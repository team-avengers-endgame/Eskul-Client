/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import './NotesLIst.css'
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Pdf from './Pdf';
import { nodesData } from './NotesData/NotseData';

const NotesList = () => {
    const [name, setName] = useState("");
    const [notes, setNotes] = useState([]);
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState();

    useEffect(() => {
        setNotes(nodesData)
    }, [])



    const handleClose = () => {
        setOpen(false);
    };
    const handleSetScroll = (name) => {
        setName(name);
        setScroll();
        setOpen(true);
    };







    return (

        <Container>
            <Typography variant="h4" sx={{ margin: "10px", fontWeight: 'bold', textAlign: 'center', my: 5 }} >Read the Books!</Typography>
            <Box sx={{ mx: 'auto' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {notes?.map((note, index) => (
                        <Grid item spacing={{ xs: 2, md: 3 }} xs={12} sm={4} md={4} key={index}
                        >

                            <Box className="card">
                                <img className="pro-pic" src={note?.img} alt="" />
                                <Box className="desciption-wrap">
                                    <Box className="description">
                                        <Typography variant='h6'>{note?.name}</Typography>
                                        <Typography variant='h6'>{note?.sub}</Typography>
                                        <Button onClick={() => handleSetScroll(note?.name)} >Read the PDF</Button>

                                    </Box>
                                </Box>
                            </Box>




                        </Grid>
                    ))}
                </Grid>



                <Pdf
                    handleClose={handleClose}
                    open={open}
                    scroll={scroll}
                    name={name}
                />
            </Box>
        </Container>

    );
}


export default NotesList;

