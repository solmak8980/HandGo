import type { OutlineProps } from "../../types";

export function Outline({ title }: OutlineProps) {
  return (
    <div className="inline-block max-w-[300px] bg-gray-50 w-auto border-l-4 border-blue-600 shadow-sm rounded-sm py-1 px-3">
      <h2 className="text-base font-medium text-gray-800">{title}</h2>
    </div>
  );
}
