import Player from './components/Player.jsx';
import Timer from './components/Timer.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title = "Easy" playerTimer = {1}/>
        <Timer title = "Medium" playerTimer = {5} />
        <Timer title = "Hard" playerTimer = {15} />
        <Timer title = "Insane" playerTimer = {25} />
        <Timer title = "Impossible" playerTimer = {55} />
      </div>
    </>
  );
}

export default App;
