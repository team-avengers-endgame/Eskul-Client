import { Box, CircularProgress, Typography } from '@mui/material';
import Swal from 'sweetalert2';

export const LinkStyle = { textDecoration: 'none', color: 'rgba(5,5, 0, 0.54)' }
export const ActiveLinkStyle = { color: 'gray', fontWeight: 'bold' }

export const ButtonStyle = {
    backgroundImage: `linear-gradient(to right,#00bccf, #005593)`,
    color: 'white'
}
export const ButtonStyleTaniay = {
    color: "#fff",
    flexBasis: "initial",
    minHeight: "40px",
    fontFamily: "Sans-serif",
    fontSize: "15px",
    textTransform: "capitalize",
    letterSpacing: "1px",
    backgroundImage: "linear-gradient(to right bottom, rgba(126,213,111,0.85), rgba(40,180,133,0.85))",
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
    fontWeight: 500,
    whiteSpace: "nowrap",
    width: "auto",
    mb: 2,
    overflow: "visible",
}
export const ButtonHover = { backgroundImage: `linear-gradient(to left,#00bccf, #005593)` }

export const loading =
    <Box sx={{ textAlign: 'center', padding: '100px 0' }}>
        <CircularProgress color="secondary" />
        <Typography>Loading...</Typography>
    </Box>


export const alert = (icon, title, text) => {
    Swal.fire({
        position: 'center',
        icon: icon,
        title: title,
        text: text,
        showConfirmButton: false,
        timer: 1500
    })
}