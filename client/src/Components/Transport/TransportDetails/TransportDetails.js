// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { List, ListItemButton, ListItemText } from '@mui/material';
// const TransportDetails = () => {
//     const {id} = useParams()
//     const [transportDetails,SetTransportDetails] = useState([])
    
//     useEffect(()=>{
//         fetch('https://raw.githubusercontent.com/Taniatabassumnoor/fakedata/main/transportdetails.json')
//         .then(res=>res.json())
//         .then(data=>SetTransportDetails(data));
//     },[id])
//     const StyledTableCell = styled(TableCell)(({ theme }) => ({
//         [`&.${tableCellClasses.head}`]: {
//           backgroundColor: theme.palette.common.black,
//           color: theme.palette.common.white,
//         },
//         [`&.${tableCellClasses.body}`]: {
//           fontSize: 14,
//         },
//       }));
      
//       const StyledTableRow = styled(TableRow)(({ theme }) => ({
//         '&:nth-of-type(odd)': {
//           backgroundColor: theme.palette.action.hover,
//         },
//         // hide last border
//         '&:last-child td, &:last-child th': {
//           border: 0,
//         },
//       }));
//       const [selectedIndex, setSelectedIndex] = React.useState(1);

//       const handleListItemClick = (event, index) => {
//         setSelectedIndex(index);
//       };
    
//     return (
//         <div>
//             <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Location</StyledTableCell>
//             <StyledTableCell align="right">Schools Name</StyledTableCell>
//             <StyledTableCell align="right">Bus Name&nbsp;</StyledTableCell>
//             <StyledTableCell align="right">Schedule&nbsp;</StyledTableCell>
//             <StyledTableCell align="right">Bus Image&nbsp;(g)</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {transportDetails?.map((transportDetails) => (
//             <StyledTableRow key={transportDetails.location}>
//               <StyledTableCell component="th" scope="row">
//                 {transportDetails.location}
//               </StyledTableCell>
              
//               <StyledTableCell align="right">
                 
//                       {/* <li>1. {transportDetails?.schools?.sh1}</li> */}
//                       <List component="nav" aria-label="secondary mailbox folder">
//         <ListItemButton
//           selected={selectedIndex === 2}
//           onClick={(event) => handleListItemClick(event, 2)}
//         >
//           <ListItemText primary={transportDetails?.schools?.sh1} />
//         </ListItemButton>
//         <ListItemButton
//           selected={selectedIndex === 3}
//           onClick={(event) => handleListItemClick(event, 3)}
//         >
//           <ListItemText primary={transportDetails?.schools?.sh2}/>
//         </ListItemButton>
//         <ListItemButton
//           selected={selectedIndex === 4}
//           onClick={(event) => handleListItemClick(event, 4)}
//         >
//           <ListItemText primary={transportDetails?.schools?.sh3}/>
//         </ListItemButton>
//         <ListItemButton
//           selected={selectedIndex === 5}
//           onClick={(event) => handleListItemClick(event, 5)}
//         >
//           <ListItemText primary={transportDetails?.schools?.sh4}/>
//         </ListItemButton>
//         <ListItemButton
//           selected={selectedIndex === 6}
//           onClick={(event) => handleListItemClick(event, 6)}
//         >
//           <ListItemText primary={transportDetails?.schools?.sh5}/>
//         </ListItemButton>
        
//       </List>
                 
//                   </StyledTableCell>
//               <StyledTableCell align="right">{transportDetails?.name}</StyledTableCell>
//               <StyledTableCell align="right">{transportDetails?.time}</StyledTableCell>
//               <StyledTableCell align="right"><img style={{width:"100%"}} src={transportDetails?.busImg} alt="" /></StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//         </div>
//     );
// };

// export default TransportDetails;



import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TransportDetails = () => {
  let {tpid} = useParams();
  const [details,setDetails] = useState([])
  const [items,setItems] = useState([])
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/Taniatabassumnoor/fakedata/main/transportdetails.json')
        .then(res=>res.json())
        .then(data=>setDetails(data));
  },[])
  
  useEffect(()=>{
   const foundtp=  details.find(tp=>tp?.id==tpid)
   setItems(foundtp)
  },[details])
  
  return (
    <Container sx={{py:4}}>
             <Typography sx={{mb:4}} variant="h5" gutterBottom component="div">
        Name of the Bus is <span style={{color:"#0c4b65",fontWeight:600}}>{items?.name}</span>
      </Typography>
      <Grid container spacing={12}>
  <Grid item xs={12} sm={12} md={6}>
  
  <img
              style={{ width: "100%",
              height: "auto",
             maxWidth:"100%",
             
              verticalAlign: "top",
              borderRadius: "10px",
              margin:"auto",
              aspectRatio: "auto 1200 / 1200",
              }} 
              src={items?.busImg}
              alt=""
            />
  </Grid>
  <Grid item xs={12} sm={12} md={6}>
    <Box sx={{ background: "#fff",
                w: "25%",
                p: "20px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px"}}>
                <Typography sx={{color:"#0c4b65",fontSize:"24px",fontWeight:400}} variant="h6" gutterBottom component="div">
  In {items?.location} Location, the transportation facility we provided are <br />
  <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <ArrowForwardIosIcon
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mx: 2,
                  fontSize: "14px",
                  color: "#46AADC",
                  mt: 2,
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: 15, color: "#777", lineHeight: 3 }}
                variant="body2"
                gutterBottom
              >
                {items?.schools?.sh1} <br />
              Schedule:  {items?.time} 
              </Typography>
            </Box>
          </Box>
          {/* principles-2*/}
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <ArrowForwardIosIcon
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mx: 2,
                  fontSize: "14px",
                  color: "#46AADC",
                  mt: 2,
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: 15, color: "#777", lineHeight: 3 }}
                variant="body2"
                gutterBottom
              >
                {items?.schools?.sh2}
                <br />
              Schedule:  {items?.time}
              </Typography>
            </Box>
          </Box>
          {/* principles-3*/}
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <ArrowForwardIosIcon
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mx: 2,
                  fontSize: "14px",
                  color: "#46AADC",
                  mt: 2,
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{ fontSize: 15, color: "#777", lineHeight: 3 }}
                variant="body2"
                gutterBottom
              >
               {items?.schools?.sh3}<br />
              Schedule:  {items?.time}
              </Typography>
            </Box>
          </Box>
          {/* principles-4*/}
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <ArrowForwardIosIcon
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mx: 2,
                  fontSize: "14px",
                  color: "#46AADC",
                  mt: 2,
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{ fontSize: 15, color: "#777", lineHeight: 3 }}
                variant="body2"
                gutterBottom
              >
               {items?.schools?.sh4}<br />
              Schedule:  {items?.time}
              </Typography>
            </Box>
          </Box>
          {/* principles-5*/}
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <ArrowForwardIosIcon
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mx: 2,
                  fontSize: "14px",
                  color: "#46AADC",
                  mt: 2,
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{ fontSize: 15, color: "#777", lineHeight: 3 }}
                variant="body2"
                gutterBottom
              >
                {items?.schools?.sh5}<br />
              Schedule:  {items?.time}
              </Typography>
            </Box>
          </Box>
      </Typography>
                  </Box>
  
  </Grid>

</Grid>
    </Container>
  );
};

export default TransportDetails;