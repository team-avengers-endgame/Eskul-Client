import React, { useEffect, useState } from "react";
import { formatDistanceToNow, subHours } from 'date-fns';

import {Card,CardHeader,Divider,IconButton,List,ListItem,ListItemAvatar,ListItemText, TablePagination} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { api } from "../../../../Hooks/Api";


const LatestProducts = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`${api}/books`)
          .then((res) => res.json())
          .then((data) => {
            setBooks(data?.data?.data);
            
    
          });
      }, []);
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
      
    return(
        <Card >
        <CardHeader
            subtitle={`${books.length} in total`}
            title="Latest Products"
        />
        <Divider />
        <List>
            {books?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.reverse()?.map((product, i) => (
                <ListItem
                    divider={i < books?.length - 1}
                    key={product?._id}
                >
                    <ListItemAvatar>
                        <img
                            alt={product?.bookName}
                            src={product?.bookImg}
                            style={{
                                height: 48,
                                width: 48
                            }}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={product?.bookName}
                        secondary={`Updated ${formatDistanceToNow(subHours(Date.now(),5))}`}
                    />
                    <IconButton
                        edge="end"
                        size="small"
                    >
                        <MoreVertIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={books.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
      
    </Card>
    )
}


export default LatestProducts;
/// updatedAt: subHours(Date.now(), 10)