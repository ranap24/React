export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.Index.row} ${turn.Index.col}`}>
          {turn.player} selected {turn.Index.row},{turn.Index.col}
        </li>
      ))}
    </ol>
  );
}
