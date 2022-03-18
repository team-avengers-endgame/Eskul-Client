import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import { Container, Typography, } from "@mui/material";

const Calendar = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Container>
        <Typography sx={{color: "#a3a3a3", textAlign: "center",fontSize:"20px",p:2,letterSpacing:1,fontWeight:600}} variant="h6" gutterBottom component="div">
       Academic Calendar
 </Typography>
       <LocalizationProvider dateAdapter={AdapterDateFns}>
    <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
 </LocalizationProvider>
   </Container>
    );
};

export default Calendar;