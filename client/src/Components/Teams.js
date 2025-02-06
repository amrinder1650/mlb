import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Teams() {
  const [teams, setTeams] = useState(null);
  const [newTeam, setNewTeam] = useState(null);

  const getTeams = () => {
    axios.get('http://localhost:8080/teams')
    .then(res => {setTeams(res.data)}).catch(err => console.error(err));
  }

  const updateTeam = (event) => {
    setNewTeam(event.target.value);
  }

  const addTeam = (team) => {
    axios.post('http://localhost:8080/teams', {
      team: team
    }).then(res => {
      getTeams();
    }).catch(err => console.error(err));
  }

  const removeTeam = (team) => {
    axios.put('http://localhost:8080/teams', {
      team: team
    }).then(res => {
      getTeams();
    }).catch(err => console.error(err));
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
                  {team.win_pecentage}
                </td>
                <td>
                  <button onClick={() => removeTeam(team.team)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <input type="text" onChange={(input) => updateTeam(input)}/>
      <button onClick={() => addTeam(newTeam)}>Add Team</button>
    </div>
  );
}