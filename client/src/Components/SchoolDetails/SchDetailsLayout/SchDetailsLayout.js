import { Container, Grid } from "@mui/material";
import React from "react";
import ContentBar from "./ContentBar/ContentBar";
import SideBar from "./SideBar/SideBar";

const SchDetailsLayout = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={3}>
          <SideBar />
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <ContentBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SchDetailsLayout;
