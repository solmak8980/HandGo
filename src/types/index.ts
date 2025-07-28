import type { ReactElement } from "react";

export interface WidgetProps {
  title: string;
  value: string | number;
  icon: ReactElement;
  bgColor?: string;
}

export interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor?: string;
      backgroundColor?: string;
    }[];
  };
}

export interface PieChartProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      borderColor?: string[];
      borderWidth?: number;
    }[];
  };
}

export interface Comment {
  name: string;
  comment: string;
  rating: number;
  date: string;
}

export interface CommentWidgetProps {
  comments: Comment[];
}

export interface BarChartItem {
  label: string;
  value: number;
}

export interface BarChartProps {
  title?: string;
  data: BarChartItem[];
  height?: number;
}

export interface OutlineProps {
  title: string
}