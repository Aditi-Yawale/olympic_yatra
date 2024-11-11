import './AthleteDashboard.css';

const PlayersPerCountry = () => {
  return (
    <div className="players-per-country">
      <h3>Players per Country</h3>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Players</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USA</td>
            <td>12</td>
          </tr>
          {/* More rows */}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersPerCountry;