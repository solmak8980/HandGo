import type { ReactElement } from "react";

export interface AppRoute {
    path?: string;
    element?: ReactElement;
    layout?: "main" | "auth" | "admin" | null;
    title?: string;
    children?: AppRoute[];
    index?: boolean; // ✅ thêm dòng này
  }
  

