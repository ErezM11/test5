import Graph from "./component/Graph";
import TableUsers from "./component/TableUsers";
import NavBar from "./component/NavBar";

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Graph></Graph>
      <TableUsers></TableUsers>
    </div>
  );
}
