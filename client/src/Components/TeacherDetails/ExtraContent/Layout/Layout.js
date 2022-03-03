import { Container, Grid } from "@mui/material";
import React from "react";
import AboutTeacher from "../AboutTeacher/AboutTeacher";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";

const Layout = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <AboutTeacher />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Experience />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Skills />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
