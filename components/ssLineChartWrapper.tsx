// create a react component that displays a simple line chart

import { GameModel } from "@/lib/data";
import SimpleLineChart from "./simpleLineChart";

export default async function LineChartWrapper(props: any) {
  
  const m = new GameModel();
  // const getAll = await m.getAll({ genre: [1,2,7] });


  return (
    <>
      <SimpleLineChart />
    </>
  );
}
