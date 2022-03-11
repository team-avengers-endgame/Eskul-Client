import { Box, ButtonBase, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useParams } from "react-router-dom";
import { api } from "../../../Hooks/Api";
const TeacherInfo = () => {
  const { id } = useParams();
  const [teacherInfos, setTeacherInfos] = useState([]);
  useEffect(() => {
    fetch(`${api}/teachers/${id}`)
      .then((res) => res.json())
      .then((data) => setTeacherInfos(data.data.data));
  }, []);
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
          {/* Icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#46aadd",
              mb: 5,
            }}
          >
            <ButtonBase>
              <FacebookRoundedIcon
                sx={{ fontSize: "28px", cursor: "pointer" }}
              />
            </ButtonBase>
            <ButtonBase>
              <WhatsappRoundedIcon
                sx={{ fontSize: "28px", cursor: "pointer" }}
              />
            </ButtonBase>
            <ButtonBase>
              <LinkedInIcon sx={{ fontSize: "28px", cursor: "pointer" }} />
            </ButtonBase>
            <ButtonBase>
              <EmailIcon sx={{ fontSize: "28px", cursor: "pointer" }} />
            </ButtonBase>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeacherInfo;
