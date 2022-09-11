import React from 'react'

function NewCalendar() {
  const date = new Date();
  const month = date.getMonth();
  const weekDays = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];
  const months = {
    0: 'Janeiro',
    1: 'Feveiro',
    2: 'Março',
    3: 'Abril',
    4: 'Maio',
    5: 'Junho',
    6: 'Julho',
    7: 'Agosto',
    8: 'Setembro',
    9: 'Outubro',
    10: 'Novembro',
    11: 'Dezembro',
  };
  return (
    <div>
      <div>
        <h4>{months[month]}</h4>
      </div>
      {weekDays.map((weekDay) => (
        <div key={weekDay}>{weekDay}</div>
      ))}
    </div>
  );
}

export default NewCalendar;
