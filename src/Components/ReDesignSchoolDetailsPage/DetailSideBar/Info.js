import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from "../../../Hooks/Api";
import { Container, Table, TableCell,TableRow,  } from '@mui/material';
const Info = () => {
    const [infos,setInfos] = useState([])
    const { id } = useParams();
    useEffect(() => {
        fetch(`${api}/schools/${id}`)
          .then((res) => res.json())
          .then((data) => setInfos(data.data.data));
          
      }, [id]);
     
    return (
        <Container>
           <Table sx={{ minWidth: {
               xs:250,sm:350,md:450
           }}} aria-label="simple table">
     
          <TableRow>
            <TableCell>Alternative Name</TableCell>
            <TableCell align="right">{infos.schoolName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>EIIN Number</TableCell>
            <TableCell align="right">{infos.EIIN}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Founder Date</TableCell>
            <TableCell align="right">{infos.founderDate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>School Type</TableCell>
            <TableCell align="right">{infos.schoolType}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Location Name</TableCell>
            <TableCell align="right">{infos.location}</TableCell>
          </TableRow>
        
      </Table>
        </Container>
    );
};

export default Info;