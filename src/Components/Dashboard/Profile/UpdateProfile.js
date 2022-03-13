import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import uploadImage from "../../../Hooks/useImgUpload";
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Button,
    Grid,
    TextField,
} from "@mui/material";

import { ButtonStyle } from "../../../Hooks/useStyle";
import { useForm } from "react-hook-form";

import useAuth from "../../../Hooks/useAuth";



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
const UpdateProfile = ({ handleClose, open, scroll }) => {

    const { register, handleSubmit, reset } = useForm();
    const [bookImg, setBookImg] = useState("");
    const { user, updateUserProfile } = useAuth();



    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const handleImgUpload = (img) => {
        uploadImage(img).then((res) => {
            setBookImg(res.data.data.url);
        });
    };




    const onSubmit = async (data, e) => {
        e.preventDefault()
        const newUser = { ...data, photoURL: bookImg || user.photoURL };
        updateUserProfile(newUser?.displayName, newUser?.photoURL);
        console.log(newUser)
        handleClose();
        reset();

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
                <DialogTitle id="scroll-dialog-title">
                    Edit Profile
                </DialogTitle>
                <DialogContent dividers={scroll === "paper"}>
                    <Box>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={classes.form}
                            noValidate
                        >
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        label="Full Name"
                                        autoFocus
                                        defaultValue={user?.displayName}
                                        {...register("displayName", { required: true })}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12}>
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
                                <Grid item xs={12} sm={12} md={12}>
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
export default UpdateProfile;
