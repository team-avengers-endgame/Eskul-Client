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
import axios from 'axios';
import { alert } from '../../../Hooks/useStyle';
import { Link } from 'react-router-dom';
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

export default function Books() {

  const [books, setBooks] = React.useState([]);



  useEffect(() => {
    fetch(`${api}/books`)
      .then(res => res.json())
      .then(data => setBooks(data?.data?.data))
  }, [])






  const handleDeleteBook = (bookId) => {
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
        axios.delete(`${api}/books/${bookId}`)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
          .then((response) => {
            const deleteBook = books.filter(d => d._id !== bookId)
            setBooks(deleteBook);

          })
          .catch((error) => {
            !error.status === 204 &&
              alert('error', 'Bad Request, Places Try again')
          });
      }
    })


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
            {books?.map((book) => (
              <StyledTableRow
                key={book._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {book?.bookName}
                </StyledTableCell>
                <StyledTableCell  >
                  <img style={{ width: '50px', height: '70px' }} src={book?.bookImg} alt="" />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link to={`/dashboard/editBooks/${book?._id}`}>
                    <IconButton
                      color="secondary"
                      component="span">
                      <EditIcon />

                    </IconButton>
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">

                  <IconButton
                    onClick={() => handleDeleteBook(book?._id)}
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


    </Box>
  );
}
