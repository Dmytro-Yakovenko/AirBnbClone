import React, {useState} from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useSelector } from 'react-redux';





const Dates =()=> {
    
    const dates= useSelector(state =>state.booking.dates)
    
    const [checkIn, setCheckIn] = useState(dates?.checkIn ? new Date(dates?.checkIn) : new Date());
const [checkOut, setCheckOut] = useState(dates?.checkOut ? new Date(dates?.checkOut) : new Date());

   
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid
        container
        columns={{ xs: 1, lg: 2 }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <DateCalendar onChange={(e)=>setCheckIn(e.target.value)} value={checkIn} disablePast />
        </Grid>
        {/* <Grid item>
        <DateCalendar onChange={(e)=>setCheckOut(e.target.value)} value={checkOut} disablePast />
        </Grid> */}
      </Grid>
    </LocalizationProvider>
  );
}

export default Dates