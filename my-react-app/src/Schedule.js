import React from 'react';

const Schedule = ({ semester, timetable }) => {
  const { stream, schedules } = timetable;

  // Helper function to get the schedule for a given day
  const getDaySchedule = (day) => {
    return schedules[`semester_${semester}`][day];
  };

  return (
    <div>
      <h2>Semester {semester} Schedule - {stream}</h2>
      <div className='tt'>
      <table>
        <thead>
          <tr>
          <th></th>
            {getDaySchedule('Monday').map(({time})=>{
              return <th>{time}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day,key)=><>
            <tr className={"day"+key%2} key={day}>
            <td>{day}</td>
            {getDaySchedule(day).map(({ time,course,room }) => (
                  <td className='time' key={time}>
                    <p>{course}</p>
                    <p>{room}</p>
                  </td>
                ))}
          </tr>
          </>)}
        </tbody>
        {/* <tbody>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day,key) => (
            <tr  className={"day"+key%2} key={day}>
              <td className='day'>{day}</td>
              <td>
                {getDaySchedule(day).map(({ time }) => (
                  <div className='time' key={time}>{time}</div>
                ))}
              </td>
              <td>
                {getDaySchedule(day).map(({ course }) => (
                  <div className='course' key={course}>{course}</div>
                ))}
              </td>
              <td>
                {getDaySchedule(day).map(({ room }) => (
                  <div className='room' key={room}>{room}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
      </div>
    </div>
  );
};

export default Schedule;
