import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Box, IconButton, TableFooter, TablePagination, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { api } from "../../../Hooks/Api";
import EditSchoolDataForm from "./EditSchoolDataForm/EditSchoolDataForm";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Schools() {
  const [schools, setSchools] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [school, setSchool] = useState({});
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  const loadSchools = async () => {
    fetch(`${api}/schools`)
      .then((res) => res.json())
      .then((data) => {
        setSchools(data?.data?.data?.reverse())
        setSearchValue(data?.data?.data?.reverse())
      });
  };

  useEffect(() => {
    loadSchools();

  }, []);

  const handleOnChange = (e) => {
    const value = e.target.value;
    const newValue = schools?.filter(s => s.schoolName.toLowerCase().includes(value.toLowerCase()) || s.location.toLowerCase().includes(value.toLowerCase()))
    setSearchValue(newValue)
  }


  const handleClose = () => {
    setOpen(false);
  };

  const singleSchool = async (id) => {
    await fetch(`${api}/schools/${id}`)
      .then((res) => res.json())
      .then((data) => setSchool(data?.data?.data || ""));
    setScroll("paper");
    setOpen(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ pb: 3 }}>Manage all Schools</Typography>
      <TableContainer component={Paper}>

        <Search >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleOnChange}
          />
        </Search>

        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Schools</StyledTableCell>
              <StyledTableCell align="left">Location</StyledTableCell>
              <StyledTableCell align="left">EIIN</StyledTableCell>
              <StyledTableCell align="left">Photo</StyledTableCell>
              <StyledTableCell align="right">Added School data</StyledTableCell>
              <StyledTableCell align="right">School Edit</StyledTableCell>
              <StyledTableCell align="right">Teachers Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchValue?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((school) => (
              <StyledTableRow key={school?._id}>
                <StyledTableCell component="th" scope="row">
                  {school?.schoolName}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {school?.location}
                </StyledTableCell>
                <StyledTableCell align="left">{school?.EIIN}</StyledTableCell>
                <StyledTableCell align="left">
                  <img
                    style={{ width: "auto", height: "50px" }}
                    src={school?.schoolPhoto}
                    alt=""
                  />
                </StyledTableCell>

                <StyledTableCell align="right">
                  <Link to={`/dashboard/addedSchoolDetailsForm/${school?._id}`}>
                    <IconButton color="secondary">
                      <AddCircleOutlinedIcon />
                    </IconButton>
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton
                    color="secondary"
                    onClick={() => singleSchool(school?._id)}
                  >
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link to={`/dashboard/teachers/${school?._id}`}>
                    <IconButton color="secondary">
                      <EditIcon />
                    </IconButton>
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 40]}
              component="div"
              count={schools?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
      <EditSchoolDataForm
        school={school}
        open={open}
        scroll={scroll}
        handleClose={handleClose}
        loadSchools={loadSchools}
      />
    </Box>
  );
}
