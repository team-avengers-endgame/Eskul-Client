import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { api } from '../../../../Hooks/Api';
import { Avatar, IconButton, TableFooter, TablePagination, Typography } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import OnlineTuitionTeachersEdit from './OnlineTuitionTeachersEdit';
import axios from 'axios';
import Swal from 'sweetalert2';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const OnlineTuitionTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [id, setId] = useState("");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // --------------------------------------------------------

    const fetchTeacher = async () => {
        await fetch(`${api}/privateTeachers`)
            .then(res => res?.json())
            .then(data => setTeachers(data?.data?.data))
    }
    useEffect(() => {
        fetchTeacher()
    }, [setTeachers, setTeachers]);



    //----------------------------------------------------------

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${api}/privateTeachers/${id}`)
                    .then(() => {
                        const deleteTeacher = teachers.filter(data => data?._id !== id);
                        setTeachers(deleteTeacher)
                    })
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
                    .catch((error) => {
                        console.log(error)
                    })

            }
        })



    }

    // -------------------------------------------------------------
    const handleClickOpen = (scrollType, id) => () => {
        setId(id)
        setOpen(true);
        setScroll(scrollType);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //--------------------------------------------------------------

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    //////////////////////////////////////////////////
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ pb: 3 }}>
                Online Tuition Teachers
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell >Photo</StyledTableCell>
                            <StyledTableCell align="right">Edit</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teachers?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((teacher) => (
                                <StyledTableRow key={teacher?._id}>
                                    <StyledTableCell component="th" scope="row">
                                        {teacher?.teacherName}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">

                                        <Avatar src={teacher?.teacherPhoto} alt='' />

                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <IconButton
                                            color="secondary"
                                            onClick={handleClickOpen('paper', teacher._id)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <IconButton
                                            color="secondary"
                                            sx={{ color: "#f50057" }}
                                            component="span"
                                            onClick={() => handleDelete(teacher?._id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </StyledTableCell>

                                </StyledTableRow>
                            ))}
                    </TableBody>

                </Table>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 40]}
                        component="div"
                        count={teachers.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </TableContainer>
            <OnlineTuitionTeachersEdit
                id={id} handleClose={handleClose} open={open} scroll={scroll} fetchTeacher={fetchTeacher}
            />
        </Box>
    );
};

export default OnlineTuitionTeachers;