import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, CssBaseline, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { alert, ButtonStyle } from '../../../../Hooks/useStyle';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import Logo from './logo.png'
import { styled } from '@mui/material/styles';
import uploadImage from '../../../../Hooks/useImgUpload';
import { api } from '../../../../Hooks/Api';
import LoadingPage from '../../../Shared/LoadingPage/LoadingPage';
import axios from 'axios';

////////////////////////////////////////////////////////////////

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {

        width: '200px',

    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundImage: `linear-gradient(to right,#00bccf, #005593)`
    }
}));

///////////////////////////////////////////////////////////////////////
const SchoolTeacherEditForm = ({ id, handleClose, open, scroll }) => {

    const [singleTeacher, setSingleTeacher] = useState({});
    const [teacherPhoto, setTeacherPhoto] = useState('');

    const [schoolTeacherValue, SetSchoolTeacherValue] = useState("");
    const { register, handleSubmit, reset } = useForm();



    ///////////////////////////////////////////////////////////////////////
    useEffect(() => {
        fetch(`${api}/teachers/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleTeacher(data?.data?.data)
                setTeacherPhoto(data?.data?.data?.teacherPhoto)
                SetSchoolTeacherValue(data?.data?.data?.designation)
                reset(data?.data?.data);

            })
    }, [id, reset])




    /////////////////////////////OnSubmit/////////////////////////////////
    const onSubmit = (data) => {
        const teacherData = { ...data, teacherPhoto: teacherPhoto || singleTeacher?.teacherPhoto, designation: schoolTeacherValue || singleTeacher?.designation };


        axios.patch(`${api}/teachers/${id}`, teacherData)
            .then(res => {
                if (res.status === 200)
                    alert("success", "Updated Successfully");

            }).catch((error) => {
                if (!error.status === 200)
                    alert("error", "Bad Request, Places Try again");
            })
        reset();
        handleClose();

    }



    /////////////////////////////////////////////////////////////////////
    const handleImgUpload = img => {
        uploadImage(img)
            .then(res => {
                setTeacherPhoto(res.data.data.url);
            })
    }



    // ----------------------------------------------------------------------
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const classes = useStyles();
    // -------------------------------------------------------------------------
    const schoolTeacherOption = [
        {
            value: "Headmaster",
        },
        {
            value: "Assistant Headmaster",
        },
        {
            value: "Assistant teacher",
        },
        {
            value: "guest  teacher",
        },
    ];
    /////////////////////////////////////////////////
    const handleChangeTeacherOption = (event) => {
        SetSchoolTeacherValue(event.target.value);
    };
    ////////////////////////////////////////////////////////////////
    return (
        <div>
            <CssBaseline />
            <Dialog
                open={open}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">{singleTeacher?.school?.schoolName} <br />({singleTeacher?.teacherName})</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}>

                        {/* ---------------------------------------------------------------------   */}
                        {!singleTeacher || !teacherPhoto || !schoolTeacherValue ? <LoadingPage /> :
                            <Box className={classes.paper}

                                sx={{ pb: 7, pt: 2, px: 2, background: "#f6f8ff", borderRadius: 5, boxShadow: "1px 2px 5px #e2e2e2" }}>

                                <img alt='' className={classes.avatar} src={Logo}></img>
                                <Typography component="h1" variant="h5">School Teacher Edit Form</Typography>
                                <Box >


                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className={classes.form}
                                        noValidate
                                    >
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    {...register("teacherName", { required: true })}
                                                    fullWidth
                                                    label="Teacher Name"
                                                    autoFocus
                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    {...register("qualification", { required: true })}
                                                    fullWidth
                                                    label="Qualification"
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    id="outlined-select-currency"
                                                    select
                                                    fullWidth
                                                    size="small"
                                                    label="Designation "
                                                    value={schoolTeacherValue}
                                                    onChange={handleChangeTeacherOption}
                                                    autoFocus
                                                >
                                                    {schoolTeacherOption.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.value}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    {...register("subject", { required: true })}
                                                    fullWidth
                                                    label="Subject"
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    {...register("institution", { required: true })}
                                                    fullWidth
                                                    label="Institution"
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    type="number"
                                                    size="small"
                                                    variant="outlined"
                                                    {...register("phoneNumber", { required: true })}
                                                    fullWidth
                                                    label="Phone Number"
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    {...register("email", { required: true })}
                                                    fullWidth
                                                    label="Email"
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
                            </Box>}
                        {/* ---------------------------------------------------------------------- */}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

//////////////////////////////////////////////////
const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: 'gray',
        },

    },
});
////////////////////////////////////////////////////

export default SchoolTeacherEditForm;