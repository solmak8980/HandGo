import { FaChartLine, FaMoneyBill, FaShoppingCart, FaUser } from "react-icons/fa";
import Widget from "../../components/Widgets/Widget";
import LineChart from "../../components/Charts/LineChart";
import CommentWidget from "../../components/Widgets/SimpleWidget";

export const widgets = [
    {
        title: "Người dùng",
        value: "1,245",
        icon: <FaUser />,
        bgColor: "bg-blue-300",
    },
    {
        title: "Doanh thu",
        value: "$24,300",
        icon: <FaMoneyBill />,
        bgColor: "bg-green-300",
    },
    {
        title: "Hiệu suất",
        value: "85%",
        icon: <FaChartLine />,
        bgColor: "bg-yellow-300",
    },
    {
        title: "Đơn hàng",
        value: "320",
        icon: <FaShoppingCart />,
        bgColor: "bg-pink-300",
    },
];

const chartData = {
    labels: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7"],
    datasets: [
        {
            label: "Doanh thu (triệu VND)",
            data: [4, 8, 7, 10, 7, 12, 9],
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.2)",
            tension: 0.4,
        },
    ],
};

const sampleComments = [
    {
        name: "Nguyễn Văn A",
        comment: "Dịch vụ tuyệt vời, tôi sẽ quay lại!",
        rating: 5,
        date: "09/05/2025",
    },
    {
        name: "Trần Thị B",
        comment: "Phòng sạch sẽ, nhân viên thân thiện.",
        rating: 4,
        date: "08/05/2025",
    },
    {
        name: "Lê Văn C",
        comment: "Chưa hài lòng về thời gian chờ.",
        rating: 3,
        date: "07/05/2025",
    },
];

export default function DashBoardPage() {
    return (
        <div className="w-full flex flex-col gap-5">
            {/* Widgets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {widgets.map((widget, index) => (
                    <Widget
                        key={index}
                        title={widget.title}
                        value={widget.value}
                        icon={widget.icon}
                        bgColor={widget.bgColor}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                <div className="lg:col-span-2">
                    {/* Chart */}
                    <div className="bg-white px-6 pb-12 pt-3 rounded-lg shadow w-full h-96">
                        <h2 className="text-lg font-semibold mb-2">Biểu đồ doanh thu</h2>
                        <div className="w-full h-full">
                            <LineChart data={chartData} />
                        </div>
                    </div>
                </div>

                <CommentWidget comments={sampleComments} />
            </div>

        </div>
    );
}

