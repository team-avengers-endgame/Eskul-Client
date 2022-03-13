import { Container, Grid } from "@mui/material";
import React from "react";
import TeacherContact from "../TeacherContact/TeacherContact";
import TeacherInfo from "../TeacherInfo/TeacherInfo";

const TeacherLayout = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <TeacherInfo />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TeacherContact />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeacherLayout;
