import * as React from 'react';
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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Schools() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Schools</StyledTableCell>
                        <StyledTableCell align="right">Location</StyledTableCell>
                        <StyledTableCell align="right">EIIN</StyledTableCell>
                        <StyledTableCell align="right">Photo</StyledTableCell>
                        <StyledTableCell align="right">Added School data</StyledTableCell>
                        <StyledTableCell align="right">Edit</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                Narayontola Mission High School
                            </StyledTableCell>
                            <StyledTableCell align="right">{'Sylhet'}</StyledTableCell>
                            <StyledTableCell align="right">{3000}</StyledTableCell>
                            <StyledTableCell align="right">
                                <img style={{ width: 'auto', height: '50px' }} src="https://c8.alamy.com/comp/PAKNYJ/school-building-vector-modern-education-city-construction-urban-sign-font-yard-isolated-flat-cartoon-illustration-PAKNYJ.jpg" alt="" />
                            </StyledTableCell>

                            <StyledTableCell align="right">

                                <Link to={`/dashboard/addedSchoolDetailsForm/${row.fat}`}>
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
