import './App.css';
import { Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import getDay from "date-fns/getDay"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import React, {useState} from "react"
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format, 
  parse,
  startOfWeek,
  getDay,
  locales,
  moment
})


const events = [
  {
    title:"Big Meeting",
    allDay: true,
    start: new Date(2023,7,1),
    end: new Date(2023,7,1)
  },
  {
    title:"Vacation",
    start: new Date(2023,7,4),
    end: new Date(2023, 7, 10)
     
  },
  {
    title:"Conference",
    start: new Date(2023,7,20),
    end: new Date(2023,7,20 )
  }
]
function App() {
  return (
    <div className="App">
      <Calendar 
      localizer={localizer} 
      events={events} 
      startAccessor="start" 
      endAccessor="end"
      className='calendar' />
    </div>
  );
}

export default App;
