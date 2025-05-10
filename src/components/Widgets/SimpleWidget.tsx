// components/Widgets/CommentWidget.tsx
import { FaStar } from "react-icons/fa";
import type { CommentWidgetProps } from "../../types";


export default function CommentWidget({ comments }: CommentWidgetProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full h-full">
            <h2 className="text-lg font-semibold mb-4">Đánh giá từ khách hàng</h2>
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {comments.map((item, index) => (
                    <div
                        key={index}
                        className="border-b pb-2 last:border-b-0 last:pb-0"
                    >
                        <div className="flex justify-between items-center">
                            <span className="font-medium">{item.name}</span>
                            <span className="text-xs text-gray-500">{item.date}</span>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">{item.comment}</p>
                        <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={`text-yellow-400 ${
                                        i < item.rating ? "" : "opacity-30"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
