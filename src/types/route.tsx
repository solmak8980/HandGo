import type { ReactElement } from "react";

export interface AppRoute {
  path?: string;
  element?: ReactElement;
  layout?: "main" | "auth" | "admin" | undefined;
  title?: string;
  children?: AppRoute[];
  index?: boolean;
  icon?: ReactElement;
  role?: "admin" | "seller";
  section?: string;
}

export interface GroupedLinks {
  [section: string]: AppRoute[];
}


