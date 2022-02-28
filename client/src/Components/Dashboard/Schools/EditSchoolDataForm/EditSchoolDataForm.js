import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Chip, Divider, Grid, MenuItem, TextField } from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';
import { ButtonStyle } from '../../../../Hooks/useStyle'
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import { styled } from '@mui/material/styles';
import uploadImage from '../../../../Hooks/useImgUpload';
import AutorenewIcon from '@mui/icons-material/Autorenew';
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

const EditSchoolDataForm = ({ school, scroll, open, handleClose }) => {


    const { register, handleSubmit, reset } = useForm();


    console.log(school.teachers)
    const [teacherPhoto, setTeacherPhoto] = React.useState('');
    const [schoolTeacherValue, SetSchoolTeacherValue] = React.useState('');
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);




    /************  handleTeacherUpdate **************/

    const handleTeacherUpdate = data => {
        console.log(data)
        handleClose();
        reset();
    };

    /************  handleStudentUpdate **************/
    const handleStudentUpdate = data => {
        console.log(data)
        handleClose();
        reset();
    };

    const handleImgUpload = img => {
        uploadImage(img)
            .then(res => {
                setTeacherPhoto(res.data.data.url);
            })
    }
    const schoolTeacherOption = [
        {
            value: 'Headmaster',

        },
        {
            value: 'Assistant Headmaster',

        },
        {
            value: 'Assistant teacher',

        },
        {
            value: 'guest  teacher',

        },

    ];

    const handleChangeTeacherOption = (event) => {
        SetSchoolTeacherValue(event.target.value);
    };

    const classes = useStyles();
    return (
        <div>

            <Dialog
                open={open}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Edit Teacher information ({school?.schoolName})</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <Box >
                            <form onSubmit={handleSubmit(handleTeacherUpdate)}
                                className={classes.form} noValidate
                            >
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <TextField
                                            size='small'
                                            variant="outlined"
                                            fullWidth
                                            label="Teacher Name"
                                            autoFocus
                                            // defaultValue={school}
                                            {...register("teacherName", { required: true })}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            size='small'
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
                                            size='small'
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
                                            size='small'
                                            variant="outlined"
                                            {...register("subject", { required: true })}
                                            fullWidth
                                            label="Subject"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            size='small'
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
                                            size='small'
                                            variant="outlined"
                                            {...register("phoneNumber", { required: true })}
                                            fullWidth
                                            label="Phone Number"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField

                                            size='small'
                                            variant="outlined"
                                            {...register("email", { required: true })}
                                            fullWidth
                                            label="Email"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CssTextField

                                            size='small'
                                            sx={{ width: 1 }}
                                            accept="image/png, image/jpg, image/jpeg"
                                            type="file"
                                            onChange={e => handleImgUpload(e.target.files[0])} />

                                    </Grid>



                                </Grid>
                                <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <Button
                                            style={ButtonStyle}
                                            type='submit'
                                            size='small'
                                            variant="outlined"
                                            fullWidth
                                        >Submit</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                        <br />
                        <Divider><Chip label={<AutorenewIcon />} /></Divider>
                        <Box >
                            <DialogTitle id="scroll-dialog-title">Edit Student information</DialogTitle>
                            <Divider />
                            <form onSubmit={handleSubmit(handleStudentUpdate)}
                                className={classes.form} noValidate
                            >
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={6} md={6} >
                                        <TextField
                                            size='small'
                                            variant="outlined"
                                            {...register("teacherName", { required: true })}
                                            fullWidth
                                            label="Teacher Name"
                                            autoFocus
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            size='small'
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
                                            size='small'
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
                                            size='small'
                                            variant="outlined"
                                            {...register("subject", { required: true })}
                                            fullWidth
                                            label="Subject"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            size='small'
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
                                            size='small'
                                            variant="outlined"
                                            {...register("phoneNumber", { required: true })}
                                            fullWidth
                                            label="Phone Number"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField

                                            size='small'
                                            variant="outlined"
                                            {...register("email", { required: true })}
                                            fullWidth
                                            label="Email"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CssTextField

                                            size='small'
                                            sx={{ width: 1 }}
                                            accept="image/png, image/jpg, image/jpeg"
                                            type="file"
                                            onChange={e => handleImgUpload(e.target.files[0])} />

                                    </Grid>



                                </Grid>
                                <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <Button
                                            style={ButtonStyle}
                                            type='submit'
                                            size='small'
                                            variant="outlined"
                                            fullWidth
                                        >Submit</Button>
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
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: 'gray',
        },

    },
});
export default EditSchoolDataForm;