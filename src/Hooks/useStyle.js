import { Box, CircularProgress, Typography } from '@mui/material';
import Swal from 'sweetalert2';

export const LinkStyle = { textDecoration: 'none', color: 'rgba(5,5, 0, 0.54)' }
export const ActiveLinkStyle = { color: 'gray', fontWeight: 'bold' }

export const ButtonStyle = {
    backgroundImage: `linear-gradient(to right,#00bccf, #005593)`,
    color: 'white'
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