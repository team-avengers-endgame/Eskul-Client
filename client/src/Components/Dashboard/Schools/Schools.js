import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
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
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function Schools() {
    const [schools, setSchools] = useState([]);
    useEffect(() => {
        fetch(`${api}/schools`)
            .then(res => res.json())
            .then(data => setSchools(data?.data?.data))
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Schools</StyledTableCell>
                        <StyledTableCell align="left">Location</StyledTableCell>
                        <StyledTableCell align="left">EIIN</StyledTableCell>
                        <StyledTableCell align="left">Photo</StyledTableCell>
                        <StyledTableCell align="right">Added School data</StyledTableCell>
                        <StyledTableCell align="right">Edit</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {schools?.map((school) => (
                        <StyledTableRow key={school?._id}>
                            <StyledTableCell component="th" scope="row">
                                {school?.schoolName}
                            </StyledTableCell>
                            <StyledTableCell align="left">{school?.location}</StyledTableCell>
                            <StyledTableCell align="left">{school?.EIIN}</StyledTableCell>
                            <StyledTableCell align="left">
                                <img style={{ width: 'auto', height: '50px' }} src={school?.schoolPhoto} alt="" />
                            </StyledTableCell>

                            <StyledTableCell align="right">

                                <Link to={`/dashboard/addedSchoolDetailsForm/${school?._id}`}>
                                    <IconButton color="secondary" >
                                        <AddCircleOutlinedIcon />
                                    </IconButton>
                                </Link>

                            </StyledTableCell>
                            <StyledTableCell align="right"><IconButton color="secondary" ><EditIcon /></IconButton></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
