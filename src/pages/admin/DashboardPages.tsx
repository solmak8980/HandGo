import {
  FaChartLine,
  FaMoneyBill,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import Widget from "../../components/Widgets/Widget";
import LineChart from "../../components/Charts/LineChart";
import CommentWidget from "../../components/Widgets/SimpleWidget";
import PieChart from "../../components/Charts/PieChart";
import BarChart from "../../components/Charts/BarChart/BarChart";
import { Outline } from "../../components/Ouline";

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

const chartDataEcommerce = {
  labels: ["Khách mới", "Khách quay lại"],
  datasets: [
    {
      data: [65, 35],
      backgroundColor: ["#3b82f6", "#10b981"],
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

const topProducts = [
  { label: "Áo thun ", value: 250 },
  { label: "Giày thể thao ", value: 180 },
  { label: "Mũ lưỡi trai ", value: 120 },
  { label: "Balo ", value: 90 },
  { label: "Balo1 ", value: 165 },
  { label: "Balo3 ", value: 82 },
];

export default function DashBoardPage() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
        <div className="lg:col-span-2">
          {/* Chart */}
          <div className="bg-white px-6 pb-12 pt-3 rounded-lg shadow w-full h-96">
            <Outline title="Biểu đồ doanh thu" />
            <div className="w-full h-full">
              <LineChart data={chartData} />
            </div>
          </div>
        </div>

        <div className="bg-white px-6 pb-12 pt-3 rounded-lg shadow w-full h-96">
          <Outline title="Biểu đồ doanh thu" />
          <div className="w-full h-full">
            <PieChart data={chartDataEcommerce} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
        <div className="lg:col-span-2">
          {/* Chart */}
          <div className="bg-white px-6 pb-12 pt-3 rounded-lg shadow w-full h-96">
            <Outline title="Top sản phẩm bán chạy" />
            <div className="w-full h-full">
              <BarChart title="Top sản phẩm bán chạy" data={topProducts} />
            </div>
          </div>
        </div>

        <div className="bg-white px-6 pb-12 pt-3 rounded-lg shadow w-full h-96">
          <Outline title="Top Comments" />
          <div className="w-full h-full">
            <CommentWidget comments={sampleComments} />
          </div>
        </div>
      </div>
    </div>
  );
}
