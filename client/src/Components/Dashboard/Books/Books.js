import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { api } from '../../../Hooks/Api';
import EditBooks from './EditBooks/EditBooks';
import axios from 'axios';
import { alert } from '../../../Hooks/useStyle';

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

export default function Books() {
    const [id, setId] = useState('')
    const [books, setBooks] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState();
    useEffect(() => {
        fetch(`${api}/books`)
            .then(res => res.json())
            .then(data => setBooks(data?.data?.data))
    }, [])


    const handleDeleteBook = (bookId) => {
        axios.delete(`${api}/books/${bookId}`)
            .then((response) => {
                response.status === 204 &&
                    alert('success', 'Delete Successfully')
                books.filter(d => d._id !== id);

            })
            .catch((error) => {
                console.log(error)
                !error.status === 204 &&
                    alert('error', 'Bad Request, Places Try again')
            });
    }


    const handleClose = () => {
        setOpen(false);
    };
    const handleSetScroll = (id) => {
        setId(id)
        setScroll();
        setOpen(true);
    }


    return (
        <Box>
            <Typography variant='h5' sx={{ my: 2, fontWeight: 'bold' }}>Manage All Book</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Book Name</StyledTableCell>
                            <StyledTableCell>Photo</StyledTableCell>
                            <StyledTableCell align="right" sx={{ color: 'green' }}>Edit</StyledTableCell>
                            <StyledTableCell align="right" sx={{ color: 'red' }}>Delete</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((book) => (
                            <StyledTableRow
                                key={book._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell component="th" scope="row">
                                    {book.bookName}
                                </StyledTableCell>
                                <StyledTableCell  >
                                    <img style={{ width: '50px', height: '70px' }} src={book.bookImg} alt="" />
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <IconButton
                                        onClick={() => handleSetScroll(book._id)}
                                        color="secondary"
                                        component="span">
                                        <EditIcon />

                                    </IconButton>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <IconButton
                                        onClick={() => handleDeleteBook(book._id)}
                                        color='secondary'
                                        sx={{ color: '#f50057' }}
                                        component="span">
                                        <DeleteIcon />
                                    </IconButton>
                                </StyledTableCell>

                            </StyledTableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <EditBooks
                id={id}
                handleClose={handleClose}
                open={open}
                scroll={scroll}
            />
        </Box>
    );
}
