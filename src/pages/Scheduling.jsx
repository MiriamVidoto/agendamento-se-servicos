import React from 'react';
import CardInformation from '../components/CardInformation';
import Header from '../components/Header';
import MyCalendar from '../components/MyCalendar';


function Scheduling() {
  return (
    <div>
      <Header />
      <h2>AGENDAMENTO</h2>
      <main>
        <MyCalendar />
        <CardInformation />
      </main>
    </div>
  );
}

export default Scheduling