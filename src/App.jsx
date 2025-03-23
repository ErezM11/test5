import Graph from "./component/Graph";
import TableUsers from "./component/TableUsers";
import NavBar from "./component/NavBar";
import MostSales from "./component/MostSales";
export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Graph></Graph>
      <TableUsers></TableUsers>
      <MostSales/>

    </div>
  );
}
