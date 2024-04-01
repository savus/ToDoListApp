import { ReactNode } from "react";
import "../css/main-container.css";

export const MainContainer = ({ children }: { children: ReactNode }) => {
  return <section className="main-container container">{children}</section>;
};
