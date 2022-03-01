import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import {
  Button,
  Divider,
  Grid,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";
import { alert, ButtonStyle } from "../../../../Hooks/useStyle";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import uploadImage from "../../../../Hooks/useImgUpload";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import axios from "axios";
import { api } from "../../../../Hooks/Api";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "200px",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundImage: `linear-gradient(to right,#00bccf, #005593)`,
  },
}));

const EditSchoolDataForm = ({
  school,
  scroll,
  open,
  handleClose,
  loadSchools,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const [schoolPhoto, setSchoolPhoto] = React.useState("");
  const [schoolType, setSchoolType] = React.useState("");
  const [schoolShift, SetSchoolShift] = React.useState("");
  const [founderDate, setFounderDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleChangeSchoolType = (event) => {
    setSchoolType(event.target.value);
  };
  const handleChangeSchoolShift = (event) => {
    SetSchoolShift(event.target.value);
  };
  const handleChange = (newValue) => {
    setFounderDate(newValue);
  };

  useEffect(() => {
    SetSchoolShift(school.schoolShift);
    setSchoolType(school.schoolType);
    reset(school);
  }, [reset, school]);


  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);



  /************  handleStudentUpdate **************/
  const handleSchoolUpdate = async (data) => {
    const newSchoolData = {
      ...data,
      schoolShift,
      schoolType,
      schoolPhoto: schoolPhoto || school.schoolPhoto,
    };
    try {
      const response = await axios.patch(
        `${api}/schools/${school._id}`,
        newSchoolData
      );
      if (response.status === 200)
        alert("success", "School Updated Successfully");
    } catch (error) {
      if (!error.status === 200)
        alert("error", "Bad Request, Places Try again");
    }

    handleClose();
    reset();
    loadSchools();
  };

  const handleImgUpload = (img) => {
    uploadImage(img).then((res) => {
      setSchoolPhoto(res.data.data.url);
    });
  };

  const schoolTypes = [
    {
      value: "Co-education",
    },
    {
      value: "Boys",
    },
    {
      value: "Girls",
    },
    {
      value: "Technical",
    },
  ];
  const schoolShiftArr = [
    {
      value: "Morning shift",
    },
    {
      value: "Afternoon shift",
    },
    {
      value: "Full time (10am-4pm)",
    },
  ];

  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={open}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          ({school?.schoolName})
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box>
              <DialogTitle id="scroll-dialog-title">
                Edit School information
              </DialogTitle>
              <Divider />
              <form
                onSubmit={handleSubmit(handleSchoolUpdate)}
                className={classes.form}
                noValidate
              >
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} md={6}>
                    <TextField
                      size="small"
                      variant="outlined"
                      {...register("schoolName", { required: true })}
                      fullWidth
                      label="School Name"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      size="small"
                      variant="outlined"
                      {...register("schoolEmail", { required: true })}
                      fullWidth
                      label="School Email"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      fullWidth
                      size="small"
                      label="School Shift"
                      value={schoolShift}
                      onChange={handleChangeSchoolShift}
                      autoFocus
                    >
                      {schoolShiftArr.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      fullWidth
                      size="small"
                      label="School Type"
                      value={schoolType}
                      onChange={handleChangeSchoolType}
                      autoFocus
                    >
                      {schoolTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Stack size="small">
                        <DesktopDatePicker
                          label="Founder date"
                          inputFormat="MM/dd/yyyy"
                          value={founderDate}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>{" "}
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="number"
                      size="small"
                      variant="outlined"
                      fullWidth
                      label="EIIN Number"
                      autoFocus
                      {...register("EIIN", { required: true })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      size="small"
                      variant="outlined"
                      {...register("location", { required: true })}
                      fullWidth
                      label="Location"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CssTextField
                      size="small"
                      sx={{ width: 1 }}
                      accept="image/png, image/jpg, image/jpeg"
                      type="file"
                      onChange={(e) => handleImgUpload(e.target.files[0])}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={1}
                  sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                >
                  <Grid item xs={12} sm={6} md={6}>
                    <Button
                      style={ButtonStyle}
                      type="submit"
                      size="small"
                      variant="outlined"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "gray",
    },
  },
});
export default EditSchoolDataForm;
