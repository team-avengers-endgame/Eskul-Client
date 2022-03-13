import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useParams } from "react-router-dom";
import { api } from "../../../../../Hooks/Api";
const Contact = () => {
  const [contacts, setContacts] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`${api}/schools/${id}`)
      .then((res) => res.json())
      .then((data) => setContacts(data.data.data));
  }, [id]);
  return (
    <Container sx={{ mb: { xs: 1, sm: 1, md: 10 } }}>
      <Box
        sx={{
          p: "10px 100px 10px 15px",
          backgroundColor: "#46aadd",
          borderRadius: "0px 100px 0px 0px",
          width: "10%",
          mt: 17,
          ml: { xs: 0, sm: 0, md: 25 },

        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "14px",
          }}
        >
          Contact
        </Typography>
      </Box>
      <Box
        sx={{
          p: "15px 15px 15px 15px",
          backgroundColor: "#FFFFFF",
          borderLeft: 1,
          borderStyle: "solid",
          borderWidth: "0px 0px 0px 2px",
          borderColor: "#46aadd",
          boxShadow: "0px 0px 10px 0px rgb(0 0 0 / 15%)",
          display: "block",
          ml: { md: 25 },
          mx: { xs: "auto", sm: "auto" },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={1}>
            <EmailIcon sx={{ color: "#46aadd" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={11}>
            <Typography>{contacts?.schoolEmail}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
