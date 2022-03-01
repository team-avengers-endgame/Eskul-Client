import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';

function createData(number, name, totalGPA) {
    return { number, name, totalGPA };
}

const rows = [
    createData(1, 'Viqarunnisa Noon School And College', 1928),
    createData(2, 'Government Labratory High School', 183),
    createData(3, 'Ideal School & Colege, Dhaka', 1965),
    createData(4, 'Rajuk Uttara Model College', 262),
    createData(5, 'Dhaka Residential Model College, Dhaka', 262),

];

const TopList = () => {
    return (


        <Container>

            <Typography variant='h5'>Top Schools</Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead sx={{ border: '1px solid #ccc', p: '8px', lineHeight: '1.5', verticalAlign: 'top', fontWeight: 'bold', textAlign: 'center', fontSize: '1.5rem', borderCollapse: 'collapse', gap: '10px' }}>
                        <TableRow >
                            <TableCell sx={{ textAlign: 'center' }}>Number</TableCell>
                            <TableCell sx={{ textAlign: 'center' }} align="right">Name</TableCell>
                            <TableCell sx={{ textAlign: 'center' }} align="right">Total GPA-5</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ border: '1px solid #ccc', p: '8px', lineHeight: '1.5', verticalAlign: 'top', }}
                            >
                                <TableCell sx={{ textAlign: 'center' }} component="th" scope="row">
                                    {row.number}
                                </TableCell>
                                <TableCell sx={{ textAlign: 'center' }} component="th" scope="row" align="right">{row.name}</TableCell>
                                <TableCell sx={{ textAlign: 'center' }} component="th" scope="row" align="right">{row.totalGPA}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>

    );
};

export default TopList;