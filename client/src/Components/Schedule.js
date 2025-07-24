import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Schedule() {
  const [schedule, setSchedule] = useState(null);

  const getSchedule = () => {

    axios.get('http://localhost:8080/schedule')
    .then(res => {
      console.log('hit', res.data);
      setSchedule(res.data)}).catch(err => console.error(err));
  }

  useEffect(() => {
      if (!schedule) {
        getSchedule();
      }
    }, [schedule]);


  return (
    <div>
      <h1>Schedule</h1>
      {Schedule && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Home Team</th>
              <th>Away Team</th>
            </tr>
          </thead>
          <tbody>
          {/* {schedule.map((schedule) => (
              <tr key={schedule.id}>
                <td>
                  {schedule.date}
                </td>
                <td>
                  {schedule.time}
                </td>
                <td>
                  {schedule.home}
                </td>
                <td>
                  {schedule.away}
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      )}
    </div>
  );
}