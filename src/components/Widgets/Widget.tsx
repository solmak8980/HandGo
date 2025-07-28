import type { WidgetProps } from "../../types";


export default function Widget({ title, value, icon, bgColor = "bg-blue-500" }: WidgetProps) {
    return (
        <div className="flex items-center gap-4 rounded-lg bg-white shadowrounded-xl p-4 w-full hover:shadow-md transition">
            <div className={`p-3 rounded-full text-white ${bgColor}`}>
                {icon}
            </div>
            <div>
                <h3 className="text-base font-medium text-gray-500">{title}</h3>
                <p className="text-xl font-semibold text-gray-800">{value}</p>
            </div>
        </div>
    );
}
