import PieChart from "../../components/Charts/PieChart";


const chartData = {
  labels: ["Khách mới", "Khách quay lại"],
  datasets: [
    {
      data: [65, 35],
      backgroundColor: ["#3b82f6", "#10b981"],
    },
  ],
};

export default function DashBoardPage() {
    return (
        <div className="w-full flex flex-col gap-5">
            {/* Widgets */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {widgets.map((widget, index) => (
                    <Widget
                        key={index}
                        title={widget.title}
                        value={widget.value}
                        icon={widget.icon}
                        bgColor={widget.bgColor}
                    />
                ))}
            </div> */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                <div className="lg:col-span-2">
                    {/* Chart */}
                    <div className="bg-white px-6 pb-12 pt-3 rounded-lg shadow w-full h-96">
                        <h2 className="text-lg font-semibold mb-2">Biểu đồ doanh thu</h2>
                        <div className="w-full h-full">
                            <PieChart data={chartData} />
                        </div>
                    </div>
                </div>

                {/* <CommentWidget comments={sampleComments} /> */}
            </div>

        </div>
    );
}