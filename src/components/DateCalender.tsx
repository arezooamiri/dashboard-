

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


export default function BasicDateCalender(){
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar/>
        </LocalizationProvider>
    )
}