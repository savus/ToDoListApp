import { ReactNode } from "react";

export const MainContainer = ({ children }: { children: ReactNode }) => {
  return <section className="main-container container">{children}</section>;
};
