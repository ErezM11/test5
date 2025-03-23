import Graph from "./component/Graph";
import TableUsers from "./component/TableUsers";
import NavBar from "./component/NavBar";
import MostSales from "./component/MostSales";
import Nav from "./component/Nav";
export default function App() {
  return (
    <div className="App d-flex">
      <div className="col-2">
      <Nav/>
      </div>
      
      <div className="col-10">
        <NavBar></NavBar>
        <div className="d-flex">
          <div className="col-9">
              <Graph></Graph>
              <TableUsers></TableUsers>
            </div>
            <div className="col-3">
              <MostSales/>
            </div>
        </div>
          
        
        
      </div>
      

    </div>
  );
}
