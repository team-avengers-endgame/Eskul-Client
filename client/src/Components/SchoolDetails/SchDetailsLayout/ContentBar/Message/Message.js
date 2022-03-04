import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
const Message = () => {
  return (
    <Container>
      <Box
        sx={{
          p: "10px 100px 10px 15px",
          backgroundColor: "#46aadd",
          borderRadius: "0px 100px 0px 0px",
          width: "10%",
          mt: 17,
          ml: { xs: 0, sm: 0, md: 25 },
          mt: { xs: 5, sm: 5 },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "14px",
          }}
        >
          Message
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
        <Container sx={{ mt: 3 }}>
          <form>
            <TextField
              sx={{ width: "100%" }}
              color="secondary"
              focused
              required
              id="outlined-required"
              label="Your Name"
              placeholder="Your Name"
            />{" "}
            <br />
            <TextField
              sx={{ width: "100%", my: 3 }}
              color="secondary"
              focused
              required
              id="outlined-required"
              label="Your Email"
              placeholder="Your Email"
            />{" "}
            <br />
            <TextField
              sx={{ width: "100%", mb: 5 }}
              color="secondary"
              focused
              required
              id="outlined-required"
              label="Mobile Number"
              placeholder="Mobile Number"
            />{" "}
            <br />
            <TextField
              color="secondary"
              focused
              required
              sx={{ width: "100%", mb: 5 }}
              id="Your Message"
              label="Your Message"
              multiline
              rows={4}
              placeholder="Your Message"
            />{" "}
            <br />
            <Button
              sx={{
                color: "#fff",
                flexBasis: "initial",
                minHeight: "40px",
                fontFamily: "Sans-serif",
                fontSize: "15px",
                textTransform: "capitalize",
                letterSpacing: "0px",
                backgroundColor: "#46aadd",
                borderStyle: "solid",
                borderWidth: "1px 1px 1px 1px",
                borderColor: "#01479b",
                paddingTop: 0,
                paddingBottom: 0,
                border: "none",
                padding: "12px 24px",
                display: "inlineBlock",
                lineHeight: 1,
                borderRadius: "5px",
                fill: "#FFFFFF",
                textAlign: "center",
                fontWeight: 400,
                whiteSpace: "nowrap",
                userSelect: "none",
                width: "auto",

                overflow: "visible",
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
            >
              Send
            </Button>
          </form>
        </Container>
      </Box>
    </Container>
  );
};

export default Message;
