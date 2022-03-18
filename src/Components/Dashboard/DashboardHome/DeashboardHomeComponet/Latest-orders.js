import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {Box,Card,Divider,Fab,Table,TableBody,TableCell,TableHead,TablePagination,TableRow,TableSortLabel,Tooltip} from '@mui/material';
import { SeverityPill } from './SeverityPill';
import { api } from '../../../../Hooks/Api';



const LatestOrders = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [orders, setOrder] = useState([]);
    const fetchOrders = () => {
        fetch(`${api}/allOrder`)
            .then((res) => res.json())
            .then((data) => {
                setOrder(data);
            });
    };
    useEffect(() => {
        fetchOrders();
    }, []);



    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <Card >

                <Divider>
                    <Fab variant="extended" size="small" color="primary" aria-label="add">
                        Latest Orders
                    </Fab>
                </Divider>
                <PerfectScrollbar>
                    <Box  >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Tran_Id
                                    </TableCell>
                                    <TableCell>
                                        Customer
                                    </TableCell>
                                    <TableCell sortDirection="desc">
                                        <Tooltip
                                            enterDelay={300}
                                            title="Sort"
                                        >
                                            <TableSortLabel
                                                active
                                                direction="desc"
                                            >
                                                Date
                                            </TableSortLabel>
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell>
                                        Status
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.reverse()?.map((order) => (
                                    <TableRow
                                        hover
                                        key={order?._id}
                                    >
                                        <TableCell>
                                            {order?.tran_id}
                                        </TableCell>
                                        <TableCell>
                                            {order?.cus_name}
                                        </TableCell>
                                        <TableCell>
                                            {order?.date}
                                        </TableCell>
                                        <TableCell>
                                            <SeverityPill
                                                color={
                                                    (order?.status === 'Delivered' && 'success')
                                                    || (order?.status === 'Approved' && 'info')
                                                    || 'warning'}
                                            >
                                                {order?.status}
                                            </SeverityPill>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={orders.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Box>
                </PerfectScrollbar>
               
            </Card>
        </div>
    )


}
export default LatestOrders;