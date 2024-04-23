import { ReactNode } from "react";

export const SideContainer = ({
  children,
  side,
}: {
  children: ReactNode;
  side: string;
}) => {
  return <div className={`${side}-side-container`}>{children}</div>;
};
