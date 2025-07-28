import { Bar, Column } from "@ant-design/charts";
import type { BarChartProps } from "../../../types";
import "./BarChart.scss";

export default function BarChart({
  // title = "Top sản phẩm bán chạy",
  data,
  height = 300,
}: BarChartProps) {
  const config = {
    data: data.map((item) => ({
      ...item,
      product: item.label,
      sales: item.value,
    })),
    xField: "product",
    yField: "sales",
    state: {
      unselected: { opacity: 0.7 },
      selected: { lineWidth: 1, stroke: "black" },
    },
    interaction: {
      elementSelect: true,
    },
    height,
    // barWidthRatio: 1,
    colorField: "product",
    legend: true,
    sort: {
      reverse: true,
      by: "y",
    },
    label: {
      position: "left",
      offset: 10,
      style: {
        fill: "#ffffff",
        fontSize: 15,
        fontWeight: 600,
        fontFamily: "Arial",
      },
    },
  };

  return (
    <div className="horizontal-bar-chart">
      {/* <h3 className="text-lg font-semibold">{title}</h3> */}
      <Bar {...config} />
    </div>
  );
}
