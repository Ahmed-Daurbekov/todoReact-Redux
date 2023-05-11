import { useDispatch, useSelector } from "react-redux";
import Board from "./Componets/Board/Board";

function App() {

  return (
    <div className="app">
      <div className="container">
        <Board />
      </div>
    </div>
  );
}

export default App;
