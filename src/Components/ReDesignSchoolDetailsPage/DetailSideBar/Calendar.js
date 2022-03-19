import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import { Box, Container, Typography, } from "@mui/material";

const Calendar = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Box>
        <Typography sx={{color: "#0c4b65", textAlign: "center",fontSize:"20px",p:2,letterSpacing:1,fontWeight:600}} variant="h6" gutterBottom component="div">
       Academic Calendar
 </Typography>
       <LocalizationProvider dateAdapter={AdapterDateFns}>
    <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
 </LocalizationProvider>
   </Box>
    );
};

export default Calendar;