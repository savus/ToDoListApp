import { ReactNode } from "react";
import "../css/app-header.css";

export const AppHeader = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className="app-header">
        <h2 className="app-title">Tasks</h2>
        {children}
      </header>
    </>
  );
};
