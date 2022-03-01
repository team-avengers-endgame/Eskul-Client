import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, TableFooter, TablePagination, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { api } from "../../../Hooks/Api";
import EditBooks from "./EditBooks/EditBooks";
import axios from "axios";
import { alert } from "../../../Hooks/useStyle";
import Swal from "sweetalert2";

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

export default function Books() {
  const [id, setId] = useState("");
  const [books, setBooks] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  const loadBooks = async () => {
    fetch(`${api}/books`)
      .then((res) => res.json())
      .then((data) => setBooks(data?.data?.data));
  };
  useEffect(() => {
    loadBooks();
  }, []);

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
          .then((response) => {
            response.status === 204 &&
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
          })
        const deleteBook = books.filter((d) => d._id !== bookId);
        setBooks(deleteBook)
      }
    }).catch((error) => {
      console.log(error);
      !error.status === 204 &&
        alert("error", "Bad Request, Places Try again");
    })
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSetScroll = (id) => {
    setId(id);
    setScroll();
    setOpen(true);
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
        Manage All Book
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Book Name</StyledTableCell>
              <StyledTableCell>Photo</StyledTableCell>
              <StyledTableCell align="right" sx={{ color: "green" }}>
                Edit
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ color: "red" }}>
                Delete
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((book) => (
              <StyledTableRow
                key={book._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {book.bookName}
                </StyledTableCell>
                <StyledTableCell>
                  <img
                    style={{ width: "50px", height: "70px" }}
                    src={book.bookImg}
                    alt=""
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton
                    onClick={() => handleSetScroll(book._id)}
                    color="secondary"
                    component="span"
                  >
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton
                    onClick={() => handleDeleteBook(book._id)}
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
            count={books?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </TableContainer>

      <EditBooks
        id={id}
        handleClose={handleClose}
        open={open}
        scroll={scroll}
        loadBooks={loadBooks}
      />
    </Box>
  );
}
