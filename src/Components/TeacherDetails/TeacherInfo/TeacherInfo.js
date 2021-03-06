import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { api } from "../../../Hooks/Api";
const TeacherInfo = () => {
  const { id } = useParams();
  const [teacherInfos, setTeacherInfos] = useState([]);
  useEffect(() => {
    fetch(`${api}/teachers/${id}`)
      .then((res) => res.json())
      .then((data) => setTeacherInfos(data.data.data));
  }, [id]);
  // teacher info is
  return (
    <Container sx={{ py: 2, mr: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <img
            style={{
              height: "auto",
              maxWidth: "100%",
              verticalAlign: "top",
              borderRadius: "10px",
              aspectRatio: "auto 1200 / 1200",
            }}
            src={teacherInfos.teacherPhoto}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            sx={{
              fontSize: "26px",
              margin: "0 0 8px",
              color: "#0c4b65",
              fontWeight: "800",
            }}
            variant="h6"
            gutterBottom
            component="div"
          >
            {teacherInfos?.teacherName}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              margin: "0 0 8px",
              color: "#46aadd",
              fontWeight: "800",
            }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            {teacherInfos?.designation}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              margin: "0 0 8px",
              color: "#3B4757",
              fontWeight: "400",
            }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            <span style={{ fontWeight: "800" }}>Qualification:</span>{" "}
            {teacherInfos?.qualification}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              margin: "0 0 8px",
              color: "#3B4757",
              fontWeight: "400",
            }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            <span style={{ fontWeight: "800" }}>Subject:</span>{" "}
            {teacherInfos?.subject}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              margin: "0 0 8px",
              color: "#3B4757",
              fontWeight: "400",
            }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            <span style={{ fontWeight: "800" }}>Mobile: </span>
            {teacherInfos?.phoneNumber}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              margin: "0 0 8px",
              color: "#3B4757",
              fontWeight: "400",
            }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            <span style={{ fontWeight: "800" }}>Email:</span>
            {teacherInfos?.email}
          </Typography>
         
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeacherInfo;
