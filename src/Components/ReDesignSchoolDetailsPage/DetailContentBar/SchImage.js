import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from "../../../Hooks/Api";

const SchImage = () => {
    const { id } = useParams();
    const [images, setImages] = useState({});
    useEffect(() => {
      fetch(`${api}/schools/${id}`)
        .then((res) => res.json())
        .then((data) => setImages(data.data.data));
    }, [id]);
    return (
        <Container sx={{py:5}}>
            <Box><img style={{ height: "auto",
                         width:"100%",
                         objectFit:"cover",
                         verticalAlign: "top",
                         borderRadius: "10px",
                         margin:"auto",
                         aspectRatio: "auto 1200 / 1200"}} src={images?.schoolPhoto} alt="" /></Box>
        </Container>
    );
};

export default SchImage;