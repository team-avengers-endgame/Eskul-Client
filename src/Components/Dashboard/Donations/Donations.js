import React, { useEffect, useState } from 'react';
import { Box, IconButton, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography } from '@mui/material';

import { styled } from "@mui/material/styles";
import axios from 'axios';
import Swal from 'sweetalert2';
import DeleteIcon from "@mui/icons-material/Delete";
import { api } from '../../../Hooks/Api';

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
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));



const Donations = () => {
    const [donations, setDonations] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    useEffect(() => {
        fetch(`${api}/allDonation`)
            .then((res) => res.json())
            .then((data) => {
                setDonations(data);
            });
    }, []);
    const handleDelete = (bookId) => {

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
                axios.delete(`${api}/manageAllDonationDelete/${bookId}`)
                    .then((response) => {

                        response.status === 200 &&
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        const deleteBook = donations.filter((d) => d._id !== bookId);
                        setDonations(deleteBook)
                    })

            }
        }).catch((error) => {
            console.log(error);
            !error.status === 204 &&
                alert("error", "Bad Request, Places Try again");
        })
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box sx={{ p: 3 }}>

            <Typography variant="h5" sx={{ my: 2, fontWeight: "bold" }}>
                All Donations {donations.length===0&&'Not Found'}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell sx={{ color: "green" }}>
                                City
                            </StyledTableCell>
                            <StyledTableCell sx={{ color: "red" }}>
                                Address
                            </StyledTableCell>
                            <StyledTableCell sx={{ color: "red" }}>
                                Post Code
                            </StyledTableCell>
                            <StyledTableCell sx={{ color: "red" }}>
                                Ocupation
                            </StyledTableCell>
                            <StyledTableCell x sx={{ color: "red" }}>
                                Date
                            </StyledTableCell>
                            <StyledTableCell sx={{ color: "red" }}>
                                Amount
                            </StyledTableCell>
                            <StyledTableCell align="right" sx={{ color: "red" }}>
                                Delete
                            </StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {donations?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((donation) => (
                            <StyledTableRow
                                key={donation._id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <StyledTableCell component="th" scope="row">
                                    {donation.cus_name}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {donation.cus_email}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {donation.cus_city}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {donation.cus_add1}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {donation.cus_postcode}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {donation.ocupation}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {donation.date}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {donation.total_amount}
                                </StyledTableCell>


                                <StyledTableCell align="right">
                                    <IconButton
                                        onClick={() => handleDelete(donation._id)}
                                        color="secondary"
                                        sx={{ color: "#f50057" }}
                                        component="span"
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
                        count={donations?.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </TableContainer>


        </Box>
    );
};

export default Donations;