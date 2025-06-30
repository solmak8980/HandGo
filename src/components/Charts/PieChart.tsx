import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import type { PieChartProps } from "../../types";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ data }: PieChartProps) {
    const options = {
        responsive: true,
         maintainAspectRatio: false, 
        plugins: {
            legend: {
                position: "top" as const,
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return <Pie data={data} options={options} />;
}
