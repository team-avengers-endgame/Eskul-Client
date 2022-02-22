import Swal from 'sweetalert2';

export const LinkStyle = { textDecoration: 'none', color: 'rgba(0, 0, 0, 0.54)' }
export const ActiveLinkStyle = { color: 'gray', fontWeight: 'bold' }

export const ButtonStyle = {
    backgroundImage: `linear-gradient(to right,#00bccf, #005593)`,
    color: 'white'
}


export const alert = (icon, title) => {
    Swal.fire({
        position: 'top-end',
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1500
    })
}