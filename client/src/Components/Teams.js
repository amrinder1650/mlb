import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Teams() {
  const [teams, setTeams] = useState(null);

  const getTeams = () => {
    axios.get('http://localhost:8080/teams')
    .then(res => setTeams(res.data)).catch(err => console.error(err));
  }

  useEffect(() => {
    if (!teams) {
      getTeams();
    }
  }, [teams]);


  return (
    <div>
      <h1>TEAMS</h1>
      {teams && (
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Win Percentage</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.team}>
                <td>
                  {team.team}
                </td>
                <td>
                  {team.wins}
                </td>
                <td>
                  {team.losses}
                </td>
                <td>
                  {team.win_pecentage * 100}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}