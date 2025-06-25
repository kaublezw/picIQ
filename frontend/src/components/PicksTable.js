import React from 'react';

function PicksTable({ picks }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Matchup</th>
          <th>Picker</th>
          <th>Pick</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {picks.map(pick => (
          <tr key={pick.id}>
            <td>{pick.date}</td>
            <td>{pick.away_team} @ {pick.home_team}</td>
            <td>{pick.picker}</td>
            <td>{pick.pick}</td>
            <td>{pick.result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PicksTable;
