import React from 'react';
import 'rsuite/dist/rsuite.css';
import { Calendar } from 'rsuite';
import './MyCalendar.css';

function MyCalendar() {
  return (
    <div className="calendar-container">
      <Calendar
      bordered={false}
      compact={true}
      />
    </div>
  );
}

export default MyCalendar