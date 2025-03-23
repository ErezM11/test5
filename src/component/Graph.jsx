import { Chart } from "react-google-charts";

export default function Graph() {
  const data = [
    ["","Today","Yesterday"],
    ["10:23 PM \n 10/11", 1000,300],
    ["10:30 PM \n 10/11", 1170,250],
    ["10:40 PM \n 10/11", 660,3000],
    ["10:50 PM \n 10/11", 1030,400],
  ];

  const option = {
    chart: {
      title: "Today",
      subtitle: "Conversations",
    },
  }

  
  return (
    <div>
      <select name="" id="">
        <option value="today">Today</option>
        <option value="yesterday">Yesterday</option>
      </select>

      <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={option}
    />    
    </div>
  );
}
