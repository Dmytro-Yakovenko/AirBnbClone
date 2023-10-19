import * as React from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';




const Dates =()=> {
    const today = dayjs();
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
          <DateCalendar defaultValue={today} disableFuture />
        </Grid>
        <Grid item>
        <DateCalendar defaultValue={today} disableFuture />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

export default Dates