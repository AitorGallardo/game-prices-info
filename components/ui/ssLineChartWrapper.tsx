// create a react component that displays a simple line chart

import { anyModel } from "@/lib/data";
import SimpleLineChart from "./simpleLineChart";

export default async function LineChartWrapper(props: any) {
  const m = new anyModel();
  const getAll = await m.getAll({ category: "cereal" });
  return (
    <>
      <SimpleLineChart />
    </>
  );
}
